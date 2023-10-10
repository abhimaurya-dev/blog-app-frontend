// import { useState } from "react";
import ReactDom from "react-dom";

const Modal = ({ children, closeModalHandler }) => {
  return ReactDom.createPortal(
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 dark:bg-gray-100 opacity-50 z-8"
        onClick={closeModalHandler}
      ></div>
      <div className="fixed top-[50%] w-[22rem] md:w-auto left-[50%] translate-x-[-50%] translate-y-[-50%] z-8">
        <div className="rounded-md p-5 bg-gray-100 dark:bg-gray-700 relative">
          <button className="absolute top-2 right-2">
            <span
              className="material-symbols-outlined text-3xl text-gray-700 dark:text-gray-100"
              onClick={closeModalHandler}
            >
              cancel
            </span>
          </button>
          <div className="m-5 dark:text-gray-100">{children}</div>
        </div>
      </div>
    </>,
    document.getElementById("modal-portal")
  );
};

export default Modal;
