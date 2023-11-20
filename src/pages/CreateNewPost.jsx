import axios from "axios";
import NavigationBar from "../layouts/NavigationBar";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { axiosHeader } from "../utils/axiosHeader";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/reducers/authSlice";

const CreateNewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({
    title: false,
    description: false,
    descriptionLength: false,
  });
  const navigate = useNavigate();
  const { userId } = useParams();
  const auth = useSelector(selectAuth);
  const accessToken = auth.user.token;

  const postHandler = async (e) => {
    e.preventDefault();
    if (title.length === 0) {
      return setError({ title: true });
    }
    if (description.length === 0) {
      return setError({ description: true });
    }
    if (description.length <= 199) {
      return setError({ descriptionLength: true });
    }
    await axios.post(
      "/post/create",
      { title: title, content: description },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    navigate(`/home/${userId}`);
  };

  const returnToHomeHandler = () => {
    navigate(`/home/${userId}`);
  };

  const titleInputHandler = (e) => {
    if (error.title) {
      setError({
        title: false,
      });
    }
    setTitle(e.target.value);
  };
  const descriptionInputHandler = (e) => {
    if (error.description || error.descriptionLength) {
      setError({
        description: false,
        descriptionLength: false,
      });
    }
    setDescription(e.target.value);
  };

  return (
    <div className="dark:bg-gray-800 bg-gray-100 h-screen overflow-x-hidden">
      <NavigationBar />
      <div className="px-5 md:px-10 lg:px-[20rem] mt-5">
        <h1 className="text-[2.5rem] text-green-700">Create New Post</h1>
        <div className="form-control w-full md:w-[40rem] lg:w-[50rem] min-w-[20rem] mt-5">
          <label className="label">
            <span className="label-text text-[1.5rem] text-gray-900 dark:text-gray-100">
              Title
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter title here..."
            onChange={titleInputHandler}
            className="input input-bordered mt-1 bg-gray-100 text-gray-900 md:w-[40rem] lg:w-[50rem] min-w-[20rem]"
          />
          {error.title && (
            <div className="toast toast-top toast-end">
              <div className="alert alert-error">
                <span>Title cannot be empty</span>
              </div>
            </div>
          )}
          <label className="label">
            <span className="label-text mt-5 text-[1.5rem] text-gray-900 dark:text-gray-100">
              Description
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered mt-1 bg-gray-100 text-gray-900 h-[15rem] md:w-[40rem] lg:w-[50rem] min-w-[20rem]"
            placeholder="Write your blog here..."
            onChange={descriptionInputHandler}
          ></textarea>
          {error.description && (
            <div className="toast toast-top toast-end">
              <div className="alert alert-error">
                <span>Description cannot be empty</span>
              </div>
            </div>
          )}
          {error.descriptionLength && (
            <div className="toast toast-top toast-end">
              <div className="alert alert-error">
                <span>Description must be atleast 200 characters</span>
              </div>
            </div>
          )}
          <div className="flex flex-row justify-end gap-4 mt-5">
            <button
              onClick={returnToHomeHandler}
              className="btn btn-xs bg-green-700 text-gray-100 sm:btn-sm md:btn-md lg:btn-lg"
            >
              Return to home
            </button>
            <button
              onClick={postHandler}
              className="btn btn-xs bg-green-700 text-gray-100 sm:btn-sm md:btn-md lg:btn-lg"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
