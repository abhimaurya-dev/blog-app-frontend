/* eslint-disable react/prop-types */
import AuthOptions from "./authOptions";

const GetStartedForm = ({
  login,
  onLoginHandler,
  onSignupHandler,
  signInWithEmailHandler,
  signUpWithEmailHandler,
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[17rem] md:w-[35rem]">
      <p className="text-4xl">Join Scribblrspace</p>
      <AuthOptions
        signinOrSignup={login ? "Sign in" : "Sign up"}
        onClickHandler={login ? signInWithEmailHandler : signUpWithEmailHandler}
      />
      <p>
        {login ? "Create new account?" : "Already have an account?"}
        <button onClick={login ? onSignupHandler : onLoginHandler}>
          <span className="ml-1 cursor-pointer text-green-500">
            {login ? "Sign up" : "Login"}
          </span>
        </button>
      </p>
    </div>
  );
};

export default GetStartedForm;
