import React from "react";

function AddToCart({ cart, addRef, darkMode }) {
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  return (
    <div className={`${darkMode && "dark"} bg-white dark:bg-neutral-900`}>
      <div className="dark:bg-neutral-900 h-screen sm:h-screen">
        <div className="px-10 flex justify-center gap-3 m- " ref={addRef}>
          {cart.length === 0 ? (
            <div className="flex justify-center align-middle ">
              <h1 className=" sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold dark:text-white text-center mt-48 ">
                Add a Cart
              </h1>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((weatherData, index) => (
                <div
                  key={index}
                  className="flex gap- items-center rounded-xl  dark:border-white border-2 border-black w-[200px] sm:w-[400px] md:w-[400px] lg:w-[400px] xl:w-[400px] font-poppins mt-16"
                >
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt={weatherData.name}
                  />
                  <div>
                    <h1 className="text-2xl font-semibold dark:text-white">
                      {weatherData.name}
                    </h1>
                    <h2 className="text-2xl dark:text-white sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl">
                      {kelvinToCelsius(weatherData.main.temp)}°C
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
