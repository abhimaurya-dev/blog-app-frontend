import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";

axios.defaults.baseURL = "http://localhost:5000/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/home/:userId" element={<Home />} />
    </Routes>
  );
}

export default App;
