/* eslint-disable react/prop-types */
import userImg from "../../assets/images/user.png";
const ShowPost = ({ title, author, content, createdAt }) => {
  return (
    <div className="mt-5 dark:bg-gray-100 bg-gray-900 border rounded-lg p-10 flex flex-col">
      <p className="capitalize pb-8 text-3xl text-gray-100 dark:text-gray-900 font-bold">
        {title}
      </p>
      <div>
        <div className="flex flex-row gap-4 items-center pl-4 pb-2">
          <div className="avatar h-14 w-14">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userImg} alt="user" />
            </div>
          </div>
          <div className="flex flex-col text-gray-200 dark:text-gray-900">
            <p>
              Author: <span className="text-green-700">{author} </span>
            </p>
            <p>
              Published: <span className="text-green-700">{createdAt} </span>
            </p>
          </div>
        </div>
      </div>
      <p className="text-gray-200 dark:text-gray-900 pt-8 leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default ShowPost;
