import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "./redux/reducers/authSlice";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CreateNewPost from "./pages/CreateNewPost";

// eslint-disable-next-line no-undef
axios.defaults.baseURL =
  // eslint-disable-next-line no-undef
  process.env.REACT_APP_PROD_BASE_URL || process.env.REACT_APP_DEV_BASE_URL;

function App() {
  const dispatch = useDispatch();
  const getPosts = async () => {
    const posts = await axios.get("/post/all");
    dispatch(setPosts(posts.data.allPosts));
  };
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/home/:userId" element={<Home />} />
      <Route exact path="/post/:postId" element={<Post />} />
      <Route exact path="/:userId/createNewPost" element={<CreateNewPost />} />
    </Routes>
  );
}

export default App;
