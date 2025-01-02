import React from "react";
import { useState } from "react";

function Header({ darkMode, toggleDark ,scrollToSection ,homeRef ,cartRef,addRef}) {
  const [selected, setselected] = useState(1);

  const handleSelected = (buttonId) => {
    setselected(buttonId);
  };

  

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex justify-around py-5 px-5 items-center w-full border-b-2 border-gray-200 dark:border-white fixed backdrop-blur shrink-0 z-10"  >
        {/* logo */}
        <div className=" border-2 border-gray-200 dark:border-white rounded-xl">
          <img
            src="/public/icons/sunset.png"
            alt=""
            className="w-20 sm:w-10 md:12 lg:16 "
          />
        </div>
        {/* nav */}
        <div className="flex gap-10 font-poppins">
          <button
            className={`px-6 py-3 text-lg font-semibold rounded-lg w-28 h-16 sm:px-4 sm:py-2 ${
              selected === 1
                ? " bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 "
                : "bg-white text-neutral-900 border-2 border-neutral-900 dark:bg-neutral-900 dark:text-white "
            } `}
            onClick={() =>{ handleSelected(1);
              scrollToSection(homeRef)
             }}
          >
            <h2>Home</h2>
          </button>

          <button
            className={`px-6 py-3 text-sm font-semibold rounded-lg w-28 h-16 sm:px-4 sm:py-2 ${
              selected === 2
                ? " bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 "
                : "bg-white text-neutral-900 border-2 border-neutral-900 dark:bg-neutral-900 dark:text-white"
            } `}
            onClick={() =>{ handleSelected(2);
              scrollToSection(cartRef) 
            }}
            
          >
            <h2>Weather Cart</h2>
          </button>

          <button
            className={`px-6 py-3 text-lg font-semibold rounded-lg w-28 h-16 sm:px-4 sm:py-2 ${
              selected === 3
                ? " bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 "
                : "bg-white text-neutral-900 border-2 border-neutral-900 dark:bg-neutral-900 dark:text-white"
            } `}
            onClick={() => {handleSelected(3);
              scrollToSection(addRef)
            }}
          >
            <h2>Add</h2>
          </button>
        </div>
        {/* nightMode */}
        <div className="   ">
         <button onClick={toggleDark} className="dark:bg-white border-2 rounded-xl"> <img
            src="/public/icons/dark-mode.png"
            alt=""
            className="w-16 sm:w-12"
          /></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
