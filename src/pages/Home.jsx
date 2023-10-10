import NavigationBar from "../layouts/NavigationBar";
import Modal from "../layouts/Modal";
import { useState } from "react";
import { GetStartedForm } from "../features/getStarted/index.js";
import { SignUpForm } from "../features/signUp/index.js";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signUpWithEmail, setSignUpWithEmail] = useState(false);

  const signUpWithEmailHandler = () => {
    setSignUpWithEmail((currentState) => !currentState);
  };
  const closeModalHandler = () => {
    setIsModalOpen((currentState) => !currentState);
    setSignUpWithEmail((currentState) => !currentState);
  };
  const getStartedHandler = () => {
    setIsModalOpen((currentState) => !currentState);
  };

  const allSignupOptionsHandler = () => {
    setSignUpWithEmail(false);
  };

  return (
    <div className="dark:bg-gray-800 bg-gray-100 h-screen overflow-x-hidden">
      <NavigationBar getStartedHandler={getStartedHandler} />
      {isModalOpen && (
        <Modal closeModalHandler={closeModalHandler}>
          {signUpWithEmail ? (
            <SignUpForm allSignupOptionsHandler={allSignupOptionsHandler} />
          ) : (
            <GetStartedForm signUpWithEmailHandler={signUpWithEmailHandler} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Home;
