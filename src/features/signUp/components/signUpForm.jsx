/* eslint-disable react/prop-types */
import { useState } from "react";

const SignUpForm = ({ allSignupOptionsHandler }) => {
  const [email, setEmail] = useState("");

  const emailOnChangeHandler = (e) => {
    console.log(email);
    setEmail((currentState) => currentState + e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center w-[17rem] md:w-[35rem]">
      <p className=" text-2xl md:text-3xl mt-14">Sign up with email</p>
      <div className="flex flex-col justify-center items-center mt-10 mb-14">
        <p className=" text-md md:text-xl">
          Enter your email address to create an
        </p>
        <p className="text-md md:text-xl">account.</p>
        <label htmlFor="email" className="text-sm md:text-md mt-7">
          Your email
        </label>
        <input
          className="border-b-2 border-green-700 bg-transparent mt-2 outline-none text-center py-1 w-[17rem] md:w-[20rem]"
          type="text"
          name="email"
          value={null}
          onChange={emailOnChangeHandler}
        />
        <button className="flex justify-between items-center border-none rounded-full bg-green-700 mt-7 px-10 md:px-11 py-2 md:py-3 text-white">
          Continue
        </button>
        <button
          className="flex justify-between items-center border-none text-green-500 mt-4 text-sm"
          onClick={allSignupOptionsHandler}
        >
          <span className="material-symbols-outlined text-md pt-[0.2rem]">
            chevron_left
          </span>
          All signup option
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
