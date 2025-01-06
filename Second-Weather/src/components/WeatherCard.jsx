import React from "react";

function WeatherCart({
  setCity,
  fetchingData,
  city,
  error,
  setError,
  weatherData,
  cartRef,
  AddCart,
  cart,
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

  const entreClick = (event) => {
    if (event.key === "Enter") {
      handleSearchButtonClick();
    }
    return;
  };

  return (
    <div
      className="bg-[#FFD23F]  flex justify-center items-center sm:items-center bottom-4 w-screen "
      ref={cartRef}
    >
      <div className="">
        <div className="flex justify-center items-center ml-20 ">
          <input
            type="text"
            placeholder="Search"
            className="font-poppins w-[200px] text-xl py-2 px-3 md:w-[400px] lg:w-[400px] xl:w-[400px]  rounded-full  border-2 md:py-4 lg:py-4 xl:py-4  md:px-6 lg:px-6 xl:px-6  sm:text-2xl  md:text-2xl lg:text-2xl xl:text-2xl  sm:w-[350px]  sm:py-2  "
            onChange={handleCityName}
            onKeyDown={entreClick}
          />
          <button
            onClick={handleSearchButtonClick}
            className="w-12 h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16  bg-white rounded-full  relative  border-2 border-black py-5 ml-5 sm:w-12 sm:h-12 md:w-14 md:h-14 "
          >
            <img
              src="/icons/search.png"
              alt=""
              className="w-6 top-2 left-2 sm:top-3 sm:left-2  absolute right-5 bottom-5 z-0 "
            />
          </button>
        </div>

        <div>
          {error && (
            <div className="flex justify-center ">
                <p className="w-[400px] font-semibold text-lg px-2 sm:text-xl  sm:font-bold  md:text-xl  md:font-bold  lg:text-xl  lg:font-bold  xl:text-xl  xl:font-bold font-poppins text-center mt-16 text-red-600 ml-10 sm:w-96 md:w-96 lg:w-96 xl:w-96  ">
                {error}
                </p>
            </div>
            
          )}
          {weatherData ? (
            <div className="mt-10 flex justify-center items-center">
              <div className="w-[300px] ml-16 sm:ml-20 md:ml-20 lg:ml-20 xl:ml-20 bg-neutral-900 text-white sm:h-[515px] sm:w-[400px] md:w-[400px] lg:w-[400px] xl:w-[400px] md:h-[515px] lg:h-[515px] xl:h-[515px] rounded-lg border-white border-2 shadow-xl shadow-white">
                <div className="flex-col flex items-center p-7">
                  <div className="flex gap-1 mr-10 items-center">
                    <img src="/icons/gps.png" alt="" className="w-10 sm:w-10 md:w-10 lg:w-10 xl:w-10" />
                    <h1 className=" text-2xl sm:text-4xl md:text-4xl lg:text-4xl  xl:text-4xl  font-poppins font-">
                      {weatherData.name}
                    </h1>
                  </div>

                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt=""
                    className="w-52"
                  />
                  <h2 className="text-6xl font-bold font-poppins">
                    {kelvinToCelsius(weatherData.main.temp)} C°
                  </h2>
                  <hr className="w-1/2 mt-10 items-center" />
                </div>
                <div className="flex justify-between px-12 gap-8 ">
                  <div>
                    <h2 className=" text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-poppins font-semibold border-b-2 ">
                      Humidity:
                    </h2>
                    <div className="flex items-center gap-3 mt-2">
                      <img src="/icons/weather.png" alt="" className="w-10" />
                      <span >{weatherData.main.humidity} %</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-poppins font-semibold border-b-2">
                      Wind Speed:
                    </h2>
                    <div className="flex items-center gap-3 mt-2">
                      <img src="/icons/wind.png" alt="" className="w-10" />
                      <span>{weatherData.wind.speed} Km/H</span>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-10 flex justify-center items-center">
              <div className="w-[300px] ml-10  sm:h-[515px] md:h-[515px] lg:h-[515px] xl:h-[515px]  sm:w-[400px] md:w-[400px] lg:w-[400px] xl:w-[400px]  bg-neutral-900 text-white h-[515px] rounded-lg border-white border-2 shadow-xl shadow-white flex items-center mt-12 ">
              <span className="text-center text-4xl font-bold ml-[30%]">
                No Data
              </span>
            </div>

            </div>
            
          )}
          <br />
          <button
            onClick={() => {
              AddCart(weatherData);
            }}
            className="bg-green-500 py-5 px-9 mt-16 ml-3 rounded-xl font-semibold font-poppins text-3xl relative left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          >
            Add
          </button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default WeatherCart;
