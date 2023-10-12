import { useState } from "react";
/* eslint-disable react/prop-types */

const namePattern = /^[A-Za-z\s'-]+$/;

const GetNameAndPassword = ({ error, onErrorHandler, email }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameOnChangeHandler = (e) => {
    if (error.name) {
      delete error.name;
    }
    setName(e.target.value);
  };

  const passwordOnChangeHandler = (e) => {
    if (error.password) {
      delete error.password;
    }
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      onErrorHandler("name", "Enter a valid name");
      return;
    }
    if (!namePattern.test(name)) {
      onErrorHandler("name", "Enter a valid name");
      return;
    }
    if (password.length > 1 && password.length <= 6) {
      onErrorHandler("password", "Password length must be 6 character long");
      return;
    }
    if (password.length === 0) {
      onErrorHandler("password", "Enter a valid password");
      return;
    }
    console.log({
      email: email,
      name: name,
      password: password,
    });
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <p className=" text-md md:text-xl">Enter your name and password</p>
      </div>
      <label htmlFor="name" className="text-sm md:text-md mt-7">
        Your name
      </label>
      <input
        className="border-b-2 border-green-700 bg-transparent mt-2 outline-none text-center py-1 w-[17rem] md:w-[20rem]"
        type="text"
        name="name"
        id="name"
        autoComplete="on"
        onChange={nameOnChangeHandler}
      />
      {error.name && (
        <p className="text-red-700 dark:text-red-400 mt-2">{error.name}</p>
      )}
      <label htmlFor="password" className="text-sm md:text-md mt-7">
        Password
      </label>
      <input
        className="border-b-2 border-green-700 bg-transparent mt-2 outline-none text-center py-1 w-[17rem] md:w-[20rem]"
        type="password"
        name="password"
        id="password"
        onChange={passwordOnChangeHandler}
        title="Password must be atleast 6 character long"
      />
      {error.password && (
        <p className="text-red-700 dark:text-red-400 mt-2">{error.password}</p>
      )}
      <button
        onClick={onSubmitHandler}
        className="flex justify-between items-center border-none rounded-full bg-green-700 mt-7 px-10 md:px-11 py-2 md:py-3 text-white"
      >
        Sign up
      </button>
    </>
  );
};

export default GetNameAndPassword;
