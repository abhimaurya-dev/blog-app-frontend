/* eslint-disable react/prop-types */
import { ClipLoader } from "react-spinners";

const GetLoginPassword = ({
  error,
  password,
  showSpinner,
  onSubmitHandler,
  passwordOnChangeHandler,
  goBackToEmailHandler,
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-14">
      <p className=" text-md md:text-xl">Enter your password to</p>
      <p className="text-md md:text-xl">Sign in</p>
      <label htmlFor="email" className="text-sm md:text-md mt-7">
        Your password
      </label>
      <input
        className="border-b-2 border-green-700 bg-transparent mt-2 outline-none text-center py-1 w-[17rem] md:w-[20rem]"
        type="password"
        id="password"
        value={password}
        name="password"
        onChange={passwordOnChangeHandler}
      />
      {error.password && (
        <p className="text-red-700 dark:text-red-400 mt-2">{error.password}</p>
      )}
      {error.login && (
        <p className="text-red-700 dark:text-red-400 mt-2">{error.login}</p>
      )}
      <button
        className="flex justify-between items-center border-none rounded-full bg-green-700 mt-7 px-10 md:px-11 py-2 md:py-3 text-white"
        onClick={onSubmitHandler}
      >
        {showSpinner ? <ClipLoader size={"20px"} color="#fff" /> : "Sign in"}
      </button>{" "}
      <button onClick={goBackToEmailHandler} className="mt-3 text-green-500">
        Go Back
      </button>
    </div>
  );
};

export default GetLoginPassword;
