/* eslint-disable react/prop-types */
import Modal from "../layouts/Modal";
const LoginToContinue = ({ writeModalCloseHandler }) => {
  return (
    <Modal closeModalHandler={writeModalCloseHandler}>
      <div className="flex justify-center items-center">
        <p>Login to Continue</p>
      </div>
    </Modal>
  );
};

export default LoginToContinue;
