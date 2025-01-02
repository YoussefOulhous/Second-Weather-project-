import React from 'react'
import './index.css'
import { useState ,useRef } from 'react'
import axios from 'axios'
import Header from './components/SearchBar'
import Main from './components/Main'
import WeatherCart from './components/WeatherCard'
import AddToCart from './components/AddToCart'


function App() {


  const [city ,setCity ] = useState('');
  const [error ,setError] =useState(null);
  const [weatherData ,setWeatherData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [cart , setcart] = useState([])

  const homeRef = useRef(null)
  const cartRef = useRef(null)
  const addRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }


  const AddCart = (weatherData) => {
    if (!weatherData || !weatherData.name) {
      console.error("Invalid city data:", weatherData);
      return; // Exit the function
    }
  
    if (!cart.some(item => item.name === weatherData.name)) {
      setcart((prevCart) => [...prevCart, weatherData]);
      console.log("City added to cart:", weatherData);
    } else {
      alert("City already in cart!");
    }
  };
  



  const toggleDark = () => {
    setDarkMode(!darkMode)
  }

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`


  const fetchingData = async (city) =>{

    setWeatherData(null)
    setError(null) 

    try{
      const response= await axios.get(API_URL);
      setWeatherData(response.data)

    } catch(error){
      setError("Failed to fetch weather data. Please check the city name or try again later!")
      return
    }
  }

  const fetchingCityData=async () =>{
    const data = await axios.get(API_URL)
    console.log(data);
    
    const CityData = {
      name: data.name,
      temp: data.main.temp,
      weather: data.weather[0].description,
    }
    

  }




  return (
    <div>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} toggleDark={toggleDark} scrollToSection={scrollToSection} homeRef={homeRef} cartRef={cartRef} addRef={addRef}/>
      <Main darkMode={darkMode} setDarkMode={setDarkMode} toggleDark={toggleDark} error={error} weatherData={weatherData} homeRef={homeRef} scrollToSection={scrollToSection} cartRef={cartRef}/>
      <WeatherCart setCity={setCity} weatherData={weatherData} error={error} setError={setError} city={city} fetchingData={fetchingData} cartRef={cartRef} AddCart={AddCart} cart={cart}/>
      <AddToCart cart={cart} weatherData={weatherData} addRef={addRef} darkMode={darkMode}/>
    </div>
  )
}

export default App