import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Post from "./Pages/Post";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route Component={Home} path="/" exact="true" />
        <Route Component={About} path="/about" />
        <Route Component={Post} path="/post" />
      </Routes>
    </Router>
  );
}
export default App;
