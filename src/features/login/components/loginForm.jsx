import { useState } from "react";
import GetLoginEmail from "./getLoginEmail";
import GetLoginPassword from "./getLoginPassword";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState({});

  const onErrorHandler = (errType, errMessage) => {
    setError((currentState) => ({
      [errType]: errMessage,
      ...currentState,
    }));
  };

  const emailSubmitHandler = () => {
    if (email.length == 0) {
      onErrorHandler("email", "Please enter a valid email");
      return;
    }
    if (!emailPattern.test(email)) {
      onErrorHandler("email", "Please enter a valid email");
      return;
    }
    setEmailSubmitted(true);
  };
  const emailOnChangeHandler = (e) => {
    // console.log(error);
    if (error.email) {
      delete error.email;
    }
    // TODO : Add email Validator
    setEmail(e.target.value);
  };

  const passwordOnChangeHandler = (e) => {
    if (error.password) {
      delete error.password;
    }
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password.length === 0) {
      onErrorHandler("password", "Enter a valid password");
      return;
    }
    console.log({
      email: email,
      password: password,
    });
  };

  return (
    <div>
      {!emailSubmitted ? (
        <GetLoginEmail
          error={error}
          emailOnChangeHandler={emailOnChangeHandler}
          emailSubmitHandler={emailSubmitHandler}
        />
      ) : (
        <GetLoginPassword
          passwordOnChangeHandler={passwordOnChangeHandler}
          error={error}
          onSubmitHandler={onSubmitHandler}
        />
      )}
    </div>
  );
};

export default LoginForm;
