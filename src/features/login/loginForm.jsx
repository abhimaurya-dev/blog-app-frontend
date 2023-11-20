/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import GetLoginEmail from "./components/getLoginEmail";
import GetLoginPassword from "./components/getLoginPassword";
import { useSelector, useDispatch } from "react-redux";
import { login, selectAuth } from "../../redux/reducers/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { axiosHeader } from "../../utils/axiosHeader";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const LoginForm = ({ closeModalHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);

  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onErrorHandler = (errType, errMessage) => {
    setError((currentState) => ({
      [errType]: errMessage,
      ...currentState,
    }));
  };

  useEffect(() => {
    if (auth.user._id) {
      navigate(`/home/${auth.user._id}`);
    }
  }, [auth, navigate]);

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

  const goBackToEmailHandler = () => {
    setEmailSubmitted(false);
  };

  const emailOnChangeHandler = (e) => {
    if (error.email) {
      delete error.email;
    }
    if (error.login) {
      delete error.login;
    }
    // TODO : Add email Validator
    setEmail(e.target.value);
  };

  const passwordOnChangeHandler = (e) => {
    if (error.password) {
      delete error.password;
    }
    if (error.login) {
      delete error.login;
    }
    setPassword(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password.length === 0) {
      onErrorHandler("password", "Enter a valid password");
      return;
    }
    try {
      setShowSpinner(true);
      const response = await axios.post(
        "/user/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true, axiosHeader }
      );
      dispatch(login(response.data.user));
      setShowSpinner(false);
      closeModalHandler();
    } catch (err) {
      setShowSpinner(false);
      onErrorHandler("login", err.response.data.message);
    }
  };

  return (
    <div>
      {!emailSubmitted ? (
        <GetLoginEmail
          error={error}
          email={email}
          emailOnChangeHandler={emailOnChangeHandler}
          emailSubmitHandler={emailSubmitHandler}
        />
      ) : (
        <GetLoginPassword
          error={error}
          password={password}
          showSpinner={showSpinner}
          onSubmitHandler={onSubmitHandler}
          goBackToEmailHandler={goBackToEmailHandler}
          passwordOnChangeHandler={passwordOnChangeHandler}
        />
      )}
    </div>
  );
};

export default LoginForm;
