import React from "react";

function WeatherCart({
  setCity,
  fetchingData,
  city,
  error,
  setError,
  weatherData,
  cartRef
}) {
  const handleCityName = (e) => {
    setCity(e.target.value);
  };

  const handleSearchButtonClick = () => {
    if (city) {
      fetchingData(city);
    } else {
      setError("Please enter a city name.");
    }
  };

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2); 
  };

  const entreClick = (event) =>{
    if(event.key === 'Enter'){
      handleSearchButtonClick()
    } return
  }



  return (
    <div className="bg-[#FFD23F]  flex justify-center items-center bottom-4" ref={cartRef}>
      <div className="">
        <div className="flex- items-center">
          <input
            type="text"
            placeholder="Search"
            className="font-poppins w-[400px] rounded-full  border-2 py-4 px-6 text-2xl uppercase   "
            onChange={handleCityName}
            onKeyDown={entreClick}
          />
          <button
            onClick={handleSearchButtonClick}
            className="w-16 h-16 bg-white rounded-full  relative  border-2 border-black py-5 ml-5  "
          >
            <img
              src="/icons/search.png"
              alt=""
              className="w-6 absolute right-5 bottom-5 z-0 "
            />
          </button>
        </div>
       
        <div>
          {error && <p className="text-xl font-bold font-poppins text-center mt-16 text-red-600 ml-10 w-96">{error}</p>}
          {weatherData ? (
            <div className="mt-10">
              <div className="w-[450px] bg-neutral-900 text-white h-[515px] rounded-lg border-white border-2 shadow-xl shadow-white">
                <div className="flex-col flex items-center p-7">
                  <div className="flex gap-1 mr-10">
                    <img src="/icons/gps.png" alt="" className="w-10"/>
                    <h1 className="text-4xl font-poppins font-">{weatherData.name}</h1>
                  </div>
                  
                  <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" className="w-52"/>
                  <h2 className="text-6xl font-bold font-poppins">{kelvinToCelsius(weatherData.main.temp)} C°</h2>
                  <hr  className="w-1/2 mt-10 items-center"/>
                </div>
                <div className="flex justify-between px-12">
                  <div>
                    <h2 className="text-2xl font-poppins font-semibold border-b-2">Humidity:</h2>
                    <div className="flex items-center gap-3 mt-2">
                      <img src="/icons/weather.png" alt=""  className="w-10"/>
                      <span>{weatherData.main.humidity} %</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-poppins font-semibold border-b-2">Wind Speed:</h2>
                    <div className="flex items-center gap-3 mt-2">
                      <img src="/icons/wind.png" alt=""  className="w-10"/>
                      <span>{weatherData.wind.speed} Km/H</span>
                    </div>
                    <br />
                  </div>
                </div>
                
                

              </div>
            </div>
          ) : (
            <div className="w-[450px] bg-neutral-900 text-white h-[515px] rounded-lg border-white border-2 shadow-xl shadow-white flex items-center mt-12 ">
              <span className="text-center text-4xl font-bold ml-[35%]">No Data</span>
              
            </div>
          )
            
          }
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default WeatherCart;
