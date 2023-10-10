/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import googleSvg from "../assets/google.svg";
import githubSvgDark from "../assets/github-dark.svg";

const GetStartedForm = ({ signUpWithEmailHandler }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[17rem] md:w-[35rem]">
      <p className="text-4xl">Join Scribblrspace</p>
      <div className="mb-10 mt-20">
        <button className="pl-5 pr-7 mb-5 w-[17rem] py-2 text-lg flex gap-4 justify-between items-center border-2 border-gray-700 dark:border-gray-100 rounded-full">
          <span>
            <img src={googleSvg} alt="google-logo" />
          </span>
          Sign up with Gmail
        </button>
        <button className="pl-5 pr-7 mb-5 w-[17rem] py-2 text-lg flex gap-4 justify-between items-center border-2 border-gray-700 dark:border-gray-100 rounded-full">
          <span className="bg-gray-700 rounded-[50%]">
            <img src={githubSvgDark} alt="github-logo" />
          </span>
          Sign up with Github
        </button>
        <button
          className="pl-5 px-7 mb-5 w-[17rem] py-2 text-lg flex gap-4 justify-between items-center border-2 border-gray-700 dark:border-gray-100 rounded-full"
          onClick={signUpWithEmailHandler}
        >
          <span className="material-symbols-outlined">mail</span>Sign up with
          Email
        </button>
      </div>
      <p>
        Already have an account?{" "}
        <Link to="/">
          <span className="ml-1 cursor-pointer text-green-500">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default GetStartedForm;
