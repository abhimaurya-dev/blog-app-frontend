/* eslint-disable react/prop-types */
const PostFeed = ({ title, content, author, createdAt }) => {
  return (
    <div className="card lg:card-side bg-gray-800 dark:bg-white mt-5 mb-2.5 shadow-xl">
      <div className=" flex justify-center md:p-10 py-5">
        <img
          src="src\assets\images\download.png"
          className="rounded-2xl "
          alt="Album"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title md:text-[1.5rem] text-[2rem] md:pb-2 text-gray-100 dark:text-gray-900">
          {title}
        </h2>
        <p className=" text-gray-100 md:text-[1rem] text-[1.5rem] dark:text-gray-900">
          {content.length > 10 ? `${content.slice(0, 150)}...` : content}
        </p>
        <p className="">
          <span className="dark:text-gray-900">Author:</span>{" "}
          <span className=" text-green-700">{author}</span>
          <span className="dark:text-gray-900 pl-5">Created:</span>
          <span className="text-green-700 pl-1">{createdAt}</span>
        </p>

        <div className="card-actions justify-end">
          <button className="btn text-white bg-green-700">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default PostFeed;
