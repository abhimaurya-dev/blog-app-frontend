import NavigationBar from "../layouts/NavigationBar";
import Modal from "../layouts/Modal";
import { useState } from "react";
import { GetStartedForm } from "../features/getStarted/index.js";
import { SignUpForm } from "../features/signUp/index.js";
import { LoginForm } from "../features/login/index";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signUpWithEmail, setSignUpWithEmail] = useState(false);
  const [signInWithEmail, setSignInWithEmail] = useState(false);
  const [login, setLogin] = useState(false);

  const signUpWithEmailHandler = () => {
    setSignUpWithEmail(true);
  };
  const signInWithEmailHandler = () => {
    setSignInWithEmail(true);
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
    setSignUpWithEmail(false);
    setLogin(false);
    setSignInWithEmail(false);
  };
  const getStartedHandler = () => {
    setIsModalOpen(true);
  };

  const allSignupOptionsHandler = () => {
    setSignUpWithEmail(false);
  };

  const onSignupHandler = () => {
    setLogin(false);
  };

  const onLoginHandler = () => {
    setLogin(true);
  };

  return (
    <div className="dark:bg-gray-800 bg-gray-100 h-screen overflow-x-hidden">
      <NavigationBar getStartedHandler={getStartedHandler} />
      {isModalOpen && (
        <Modal closeModalHandler={closeModalHandler}>
          {login ? (
            signInWithEmail ? (
              <LoginForm closeModalHandler={closeModalHandler} />
            ) : (
              <GetStartedForm
                signUpWithEmailHandler={signUpWithEmailHandler}
                signInWithEmailHandler={signInWithEmailHandler}
                onSignupHandler={onSignupHandler}
                onLoginHandler={onLoginHandler}
                login={login}
              />
            )
          ) : signUpWithEmail ? (
            <SignUpForm
              allSignupOptionsHandler={allSignupOptionsHandler}
              closeModalHandler={closeModalHandler}
            />
          ) : (
            <GetStartedForm
              signUpWithEmailHandler={signUpWithEmailHandler}
              signInWithEmailHandler={signInWithEmailHandler}
              onSignupHandler={onSignupHandler}
              onLoginHandler={onLoginHandler}
              login={login}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Home;
