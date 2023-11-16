import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "./redux/reducers/authSlice";
import Home from "./pages/Home";

axios.defaults.baseURL = "http://localhost:5000/";

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
    </Routes>
  );
}

export default App;
