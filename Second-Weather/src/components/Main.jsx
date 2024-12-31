import React from "react";

function Main({darkMode,homeRef,scrollToSection,cartRef}) {
  return (
    <div className={`${darkMode && "dark"} bg-white dark:bg-neutral-900`}>
      <div className="flex flex-row py-20 overflow-hidden dark:bg-neutral-900" ref={homeRef}>
        <div className="px-16  py-12 flex flex-col">
          <h1 className="text-7xl font-poppins font-semibold tracking-wide sm:text-5xl md:text-6xl dark:text-yellow-400 dark:shadow-xl ">
            Good Morning
          </h1>
          <p className="text-sm mt-4 text-gray-600 w-[600px] sm:text-xs sm:w-[300px] md:text-sm dark:text-white ">
            Stay prepared with our real-time weather updates. Whether you're
            planning your day or a week-long trip, our accurate forecasts help
            you stay ahead of changing weather conditions. Check temperatures,
            wind speeds, and rainfall predictions, all in one convenient place.
            Your weather companion, anytime, anywhere!
          </p>
          <button className="w-40 py-4 mt-10 border-2 bg-neutral-800 rounded-xl text-white hover:bg-slate-950 dark:hover:bg-neutral-900 dark:hover:text-white dark:hover:border-white sm:hover:bg-slate-950  md:hover:bg-slate-950 dark:bg-white dark:text-neutral-900">
            Weather Cart
          </button>
          <div className=" flex gap-20 mt-20 ">
            <img
              src="https://imgs.search.brave.com/tMK8Juj11LASyYQoyVFUKHSfc_K9q2VCeiSEefv2h_w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uOG4u/aW8vX251eHQvaW1h/Z2UvYmZjNGM1LnN2/Zw"
              alt=""
              className="w-24 h-24 hover:scale-110 hover:transition hover:duration-300"
            />
            <img src="/icons/github.png" alt="gtb" className="w-24 h-24 hover:scale-110 hover:transition hover:duration-300 "/>
            <img src="/icons/atom.png" alt="" className="w-24 h-24 hover:scale-110 hover:transition hover:duration-300" />
          </div>
        </div>
        <div className=" w-[400px] h-[400px] rounded-full bg-yellow-500 shadow-2xl shadow-neutral-900 dark:shadow-yellow-800 sm:w-[200px] sm:h-[150px] sm:mt-16 sm:mr-6 md:w-[250px] md:h-[230px] lg:w-[300px] lg:h-[300px] lg:ml-9 xl:w-[400px] xl:h-[400px] xl:ml-32"></div>
      </div>
      <div className="dark:bg-neutral-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFD23F" fillOpacity="1" d="M0,256L1440,32L1440,320L0,320Z"></path></svg>
      </div>
    </div>
  );
}

export default Main;
