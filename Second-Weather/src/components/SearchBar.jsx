import React from "react";
import { useState } from "react";

function Header({
  darkMode,
  toggleDark,
  scrollToSection,
  homeRef,
  cartRef,
  addRef,
}) {
  const [selected, setselected] = useState(1);

  const handleSelected = (buttonId) => {
    setselected(buttonId);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex justify-around  py-5 px-5 items-center w-full border-b-2 border-gray-200 dark:border-white fixed backdrop-blur shrink-0 z-10">
        {/* logo */}
        <div className=" border-2 border-gray-200 dark:border-white rounded-xl h-12 w-12 shrink-0  ">
          <img
            src="/public/icons/sunset.png"
            alt=""
            className="w-7 sm:w-10 md:12 lg:16 "
          />
        </div>
        {/* nav */}
        <div className="flex gap-1 font-poppins">
          <button
            className={` w-16 h-16 text-sm rounded-lg md:w-28 md:h-16 sm:w-28 sm:h-16 lg:w-28 lg:h-16 xl:w-28 xl:h-16 sm:px-4 sm:py-2  sm:text-lg sm:font-semibold sm:rounded-lg  ${
              selected === 1
                ? " bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 "
                : "bg-white text-neutral-900 border-2 border-neutral-900 dark:bg-neutral-900 dark:text-white "
            } `}
            onClick={() => {
              handleSelected(1);
              scrollToSection(homeRef);
            }}
          >
            <h2>Home</h2>
          </button>

          <button
            className={`w-16 h-16 text-xs  rounded-lg md:w-28 md:h-16 sm:w-28 sm:h-16 lg:w-28 lg:h-16 xl:w-28 xl:h-16 sm:px-4 sm:py-2  sm:text-lg sm:font-semibold sm:rounded-lg ${
              selected === 2
                ? " bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 "
                : "bg-white text-neutral-900 border-2 border-neutral-900 dark:bg-neutral-900 dark:text-white"
            } `}
            onClick={() => {
              handleSelected(2);
              scrollToSection(cartRef);
            }}
          >
            <h2>Weather Cart</h2>
          </button>

          <button
            className={` w-16 h-16 text-sm rounded-lg md:w-28 md:h-16 sm:w-28 sm:h-16 lg:w-28 lg:h-16 xl:w-28 xl:h-16 sm:px-4 sm:py-2  sm:text-lg sm:font-semibold sm:rounded-lg ${
              selected === 3
                ? " bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 "
                : "bg-white text-neutral-900 border-2 border-neutral-900 dark:bg-neutral-900 dark:text-white"
            } `}
            onClick={() => {
              handleSelected(3);
              scrollToSection(addRef);
            }}
          >
            <h2>Add</h2>
          </button>
        </div>
        {/* nightMode */}
        <div className="   ">
          <button
            onClick={toggleDark}
            className="dark:bg-white border-2 rounded-xl w-12 h-12 shrink-0"
          >
            {" "}
            <img
              src="/public/icons/dark-mode.png"
              alt=""
              className="w-7 sm:w-12"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
