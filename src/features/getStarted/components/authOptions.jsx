/* eslint-disable react/prop-types */
import googleSvg from "../assets/google.svg";
import githubSvgDark from "../assets/github-dark.svg";
const AuthOptions = ({ signinOrSignup, onClickHandler }) => {
  return (
    <>
      <div className="mb-10 mt-20">
        <button className="pl-5 pr-7 mb-5 w-[17rem] py-2 text-lg flex gap-4 justify-between items-center border-2 border-gray-700 dark:border-gray-100 rounded-full">
          <span>
            <img src={googleSvg} alt="google-logo" />
          </span>
          {signinOrSignup} with Gmail
        </button>
        <button className="pl-5 pr-7 mb-5 w-[17rem] py-2 text-lg flex gap-4 justify-between items-center border-2 border-gray-700 dark:border-gray-100 rounded-full">
          <span className="bg-gray-700 rounded-[50%]">
            <img src={githubSvgDark} alt="github-logo" />
          </span>
          {signinOrSignup} with Github
        </button>
        <button
          className="pl-5 px-7 mb-5 w-[17rem] py-2 text-lg flex gap-4 justify-between items-center border-2 border-gray-700 dark:border-gray-100 rounded-full"
          onClick={onClickHandler}
        >
          <span className="material-symbols-outlined">mail</span>
          {signinOrSignup} with Email
        </button>
      </div>
    </>
  );
};

export default AuthOptions;
