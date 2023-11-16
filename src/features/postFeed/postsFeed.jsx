/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import PostFeed from "./components/postFeed";
import { selectAuth } from "../../redux/reducers/authSlice";
import { formatDateToAgo } from "../../utils/formatDateToAgo";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
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
            postId={post._id}
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
