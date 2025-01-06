import React from "react";
import { TypeAnimation } from "react-type-animation";

function Main({ darkMode, homeRef, scrollToSection, cartRef }) {
  return (
    <div className={`${darkMode && "dark"} bg-white dark:bg-neutral-900`}>
      <div
        className="flex flex-row  py-20 overflow-hidden dark:bg-neutral-900"
        ref={homeRef}
      >
        <div className="px-16 py-12 flex flex-col">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Good Morning",
              3000, // wait 1s before replacing "Mice" with "Hamsters"
              "Good After-Noon",
              3000,
              "Good Night",
              3000,
            ]}
            wrapper="span"
            speed={50}
            className=" text-4xl w-[250px] lg:text-7xl font-poppins sm:w-[400px] md:w-[400px] lg:w-[400px] xl:w-[400px]  font-semibold tracking-wide sm:text-5xl md:text-6xl dark:text-yellow-400 dark:shadow-xl"
            repeat={Infinity}
          />
          <p className="text-xs mt-4 text-gray-600 w-[250px] sm:text-xs sm:w-[300px] md:text-sm md:w-[600px] xl:w-[600px] lg:w-[600px] dark:text-white  ">
            Stay prepared with our real-time weather updates. Whether you're
            planning your day or a week-long trip, our accurate forecasts help
            you stay ahead of changing weather conditions. Check temperatures,
            wind speeds, and rainfall predictions, all in one convenient place.
            Your weather companion, anytime, anywhere!
          </p>
          <button
            className="w-24 text-sm  py-4 px-3 mt-10 border-2 sm:w-40 md:w-40 lg:w-40 xl:w-40 bg-neutral-800 rounded-xl text-white hover:bg-slate-950 dark:hover:bg-neutral-900 dark:hover:text-white dark:hover:border-white sm:hover:bg-slate-950  md:hover:bg-slate-950 dark:bg-white dark:text-neutral-900"
            onClick={() => {
              scrollToSection(cartRef);
            }}
          >
            Weather Cart
          </button>
          <div className=" flex gap-5 mt-9 sm:gap-20 md:gap-20 lg:gap-20 xl:gap-20 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20  ">
            <img
              src="https://imgs.search.brave.com/tMK8Juj11LASyYQoyVFUKHSfc_K9q2VCeiSEefv2h_w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uOG4u/aW8vX251eHQvaW1h/Z2UvYmZjNGM1LnN2/Zw"
              alt=""
              className="w-16 h-16  sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24  hover:scale-110 hover:transition hover:duration-300"
            />
            <img
              src="/icons/github.png"
              alt="gtb"
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24    hover:scale-110 hover:transition hover:duration-300 "
            />
            <img
              src="/icons/atom.png"
              alt=""
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24  hover:scale-110 hover:transition hover:duration-300"
            />
          </div>
        </div>
        <div className=" w-[80px] h-[80px]  rounded-full bg-yellow-500  shadow-2xl shadow-neutral-900 dark:shadow-yellow-800 sm:w-[200px] sm:h-[150px] sm:mt-16 sm:mr-6 md:w-[250px] md:h-[230px] lg:w-[300px] lg:h-[300px] lg:ml-9 xl:w-[400px] xl:h-[400px] xl:ml-32"></div>
      </div>
      <div className="dark:bg-neutral-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFD23F"
            fillOpacity="1"
            d="M0,256L1440,32L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Main;
