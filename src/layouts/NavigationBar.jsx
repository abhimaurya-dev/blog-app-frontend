import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const isSystemThemeDark = window.matchMedia("(prefers-color-scheme: dark)");

const NavigationBar = (props) => {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return isSystemThemeDark.matches ? "dark" : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeSwitchHandler = () => {
    setTheme((currentTheme) => {
      return currentTheme === "dark" ? "light" : "dark";
    });
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center pt-3 lg:pt-5 px-3 lg:px-48 border-b-[1px] pb-3 lg:pb-5">
        <Link to={"/"}>
          <div className="rounded-3xl px-2 lg:px-4 dark:bg-gray-100">
            <img
              src="src\assets\images\logo.png"
              className=" h-8 lg:h-10 text-gray-100"
              alt="Logo"
            />
          </div>
        </Link>
        <div className="flex flex-row gap-3 lg:gap-5 items-center">
          <button
            onClick={themeSwitchHandler}
            className="flex justify-center items-center transition-all duration-400 border-2 rounded-full h-7 lg:h-9 w-7 lg:w-9"
          >
            {theme === "dark" ? (
              <span className="material-symbols-outlined text-gray-100 text-[1.2rem] lg:text-[1.5rem]">
                dark_mode
              </span>
            ) : (
              <span className="material-symbols-outlined text-[1.2rem] lg:text-[1.5rem] text-yellow-500">
                light_mode
              </span>
            )}
          </button>
          <button
            className="border-2 border-green-700 px-4 lg:px-5 py-1 lg:py-2 rounded-3xl bg-green-700 text-white"
            // eslint-disable-next-line react/prop-types
            onClick={props.getStartedHandler}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
