/* eslint-disable react/prop-types */
const GetNameAndPassword = ({
  nameOnChangeHandler,
  passwordOnChangeHandler,
}) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <p className=" text-md md:text-xl">Enter your name and password</p>
      </div>
      <label htmlFor="email" className="text-sm md:text-md mt-7">
        Your name
      </label>
      <input
        className="border-b-2 border-green-700 bg-transparent mt-2 outline-none text-center py-1 w-[17rem] md:w-[20rem]"
        type="text"
        name="name"
        value={null}
        onChange={nameOnChangeHandler}
      />
      <label htmlFor="email" className="text-sm md:text-md mt-7">
        Password
      </label>
      <input
        className="border-b-2 border-green-700 bg-transparent mt-2 outline-none text-center py-1 w-[17rem] md:w-[20rem]"
        type="password"
        name="password"
        value={null}
        onChange={passwordOnChangeHandler}
      />
      <button className="flex justify-between items-center border-none rounded-full bg-green-700 mt-7 px-10 md:px-11 py-2 md:py-3 text-white">
        Continue
      </button>
    </>
  );
};

export default GetNameAndPassword;
