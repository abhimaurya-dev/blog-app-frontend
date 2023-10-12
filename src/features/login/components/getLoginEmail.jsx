/* eslint-disable react/prop-types */
const GetLoginEmail = ({ error, emailOnChangeHandler, emailSubmitHandler }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-14">
      {" "}
      <p className=" text-md md:text-xl">Enter your email address to</p>
      <p className="text-md md:text-xl">Sign in</p>
      <label htmlFor="email" className="text-sm md:text-md mt-7">
        Your email
      </label>
      <input
        className="border-b-2 border-green-700 bg-transparent mt-2 outline-none text-center py-1 w-[17rem] md:w-[20rem]"
        type="text"
        id="email"
        name="email"
        autoComplete="on"
        onChange={emailOnChangeHandler}
      />
      {error.email && (
        <p className="text-red-700 dark:text-red-400 mt-2">{error.email}</p>
      )}
      <button
        className="flex justify-between items-center border-none rounded-full bg-green-700 mt-7 px-10 md:px-11 py-2 md:py-3 text-white"
        onClick={emailSubmitHandler}
      >
        Continue
      </button>{" "}
    </div>
  );
};

export default GetLoginEmail;
