import NavigationBar from "../layouts/NavigationBar";
import Modal from "../layouts/Modal";
import { useState } from "react";

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
          <div className="w-[20rem]">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            expedita praesentium sed itaque, natus animi nostrum perspiciatis
            enim laboriosam sit, cumque voluptatem porro ipsum sunt? Omnis
            dolores totam iure delectus.
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;
