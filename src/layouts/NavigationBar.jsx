/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectAuth } from "../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user.png";
import LoginToContinue from "../components/loginToContinue.jsx";
// import { axiosHeader } from "../utils/axiosHeader.js";

const isSystemThemeDark = window.matchMedia("(prefers-color-scheme: dark)");

const NavigationDropDown = ({ onLogoutHandler }) => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label
        tabIndex={0}
        className="btn m-1 bg-gray-100 shadow-none hover:bg-gray-200 dark:bg-gray-800 border-none hover:dark:bg-gray-800 "
      >
        <img src={user} height="40rem" width="40rem" alt="" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 bg-gray-800 text-green-700  dark:bg-white shadow rounded-box w-52"
      >
        <li className="border-b-2 hover:dark:bg-gray-50">
          <a>Profile</a>
        </li>
        <li>
          <a onClick={onLogoutHandler}>Logout</a>
        </li>
      </ul>
    </div>
  );
};

const NavigationBar = (props) => {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return isSystemThemeDark.matches ? "dark" : "light";
  });
  const [cannotWrite, setCannotWrite] = useState(false);

  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = auth.user.token;

  useEffect(() => {
    // console.log(auth);
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

  const onLogoutHandler = async () => {
    await axios.post("/user/logout", {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(logout());
    navigate("/");
  };

  const handleWrite = () => {
    if (auth.isLoggedIn) {
      setCannotWrite(false);
      navigate(`/${auth.user._id}/createNewPost`);
    } else {
      setCannotWrite(true);
    }
  };

  const writeModalCloseHandler = () => {
    setCannotWrite(false);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center pt-3 lg:pt-5 px-3 lg:px-48 border-b-[1px] pb-3 lg:pb-5">
        <Link to={"/"}>
          <div className="rounded-3xl px-2 lg:px-4 dark:bg-gray-100">
            <img src={logo} className=" h-8 lg:h-10 text-gray-100" alt="Logo" />
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
          <button className="pl-2" onClick={handleWrite}>
            <span className="material-symbols-outlined pt-1 text-green-700 dark:text-gray-200 text-4xl">
              edit_square
            </span>
          </button>
          {cannotWrite && (
            <LoginToContinue writeModalCloseHandler={writeModalCloseHandler} />
          )}
          {auth.isLoggedIn ? (
            <div>
              <NavigationDropDown onLogoutHandler={onLogoutHandler} />
            </div>
          ) : (
            <button
              className="border-2 border-green-700 px-4 lg:px-5 py-1 lg:py-2 rounded-3xl bg-green-700 text-white"
              // eslint-disable-next-line react/prop-types
              onClick={
                auth.isLoggedIn ? onLogoutHandler : props.getStartedHandler
              }
            >
              {auth.isLoggedIn ? "Logout" : "Get Started"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
