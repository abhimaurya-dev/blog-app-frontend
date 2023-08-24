import NavigationBar from "../layouts/NavigationBar";
import Modal from "../layouts/Modal";
import { useState } from "react";
import { GetStartedForm } from "../features/getStarted/index.js";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModalHandler = () => {
    setIsModalOpen((currentState) => !currentState);
  };
  const getStartedHandler = () => {
    setIsModalOpen((currentState) => !currentState);
  };
  return (
    <div className="dark:bg-gray-800 bg-gray-100 h-screen overflow-x-hidden">
      <NavigationBar getStartedHandler={getStartedHandler} />
      {isModalOpen && (
        <Modal closeModalHandler={closeModalHandler}>
          <GetStartedForm />
        </Modal>
      )}
    </div>
  );
};

export default Home;
