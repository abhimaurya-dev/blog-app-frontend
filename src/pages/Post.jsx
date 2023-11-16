import { useParams } from "react-router-dom";
import ShowPost from "../features/showPost/showPost";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/reducers/authSlice";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { formatDateToAgo } from "../utils/formatDateToAgo";
import NavigationBar from "../layouts/NavigationBar";

const Post = () => {
  const { postId } = useParams();
  const auth = useSelector(selectAuth);
  const post = auth.posts.filter((post) => post._id === postId);
  const author = capitalizeFirstLetter(post[0].author.name);
  const createdAt = formatDateToAgo(post[0].updated_At);
  return (
    <div className="dark:bg-gray-800 bg-gray-100 h-screen overflow-x-hidden">
      <NavigationBar />
      <div className="px-5 md:px-10 lg:px-[20rem] mb-5">
        <ShowPost
          author={author}
          createdAt={createdAt}
          title={post[0].title}
          content={post[0].content}
        />
      </div>
    </div>
  );
};

export default Post;
