/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import PostFeed from "./components/postFeed";
import { selectAuth } from "../../redux/reducers/authSlice";

function formatDateToAgo(dateString) {
  const currentDate = new Date();
  const postDate = new Date(dateString);

  const timeDifference = currentDate - postDate;
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthsDifference =
    currentDate.getMonth() -
    postDate.getMonth() +
    12 * (currentDate.getFullYear() - postDate.getFullYear());
  const yearsDifference = currentDate.getFullYear() - postDate.getFullYear();

  if (yearsDifference > 0) {
    return yearsDifference === 1
      ? "1 year ago"
      : `${yearsDifference} years ago`;
  } else if (monthsDifference > 0) {
    return monthsDifference === 1
      ? "1 month ago"
      : `${monthsDifference} months ago`;
  } else if (daysDifference > 0) {
    return daysDifference === 1 ? "1 day ago" : `${daysDifference} days ago`;
  } else if (hoursDifference > 0) {
    return hoursDifference === 1
      ? "1 hour ago"
      : `${hoursDifference} hours ago`;
  } else if (minutesDifference > 0) {
    return minutesDifference === 1
      ? "1 minute ago"
      : `${minutesDifference} minutes ago`;
  } else {
    return "Just now";
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const PostsFeed = () => {
  const authStore = useSelector(selectAuth);

  // console.log(authStore.posts);

  return (
    <div>
      {authStore.posts.map((post) => {
        const createdAt = formatDateToAgo(post.updated_At);
        const author = capitalizeFirstLetter(post.author.name);
        return (
          <PostFeed
            key={post._id}
            author={author}
            title={post.title}
            content={post.content}
            createdAt={createdAt}
          />
        );
      })}
    </div>
  );
};

export default PostsFeed;
