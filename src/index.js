import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import Footer from "./components/sections/Footer/Footer";
import MoreAbout from "./pages/MoreAbout";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/MoreAboutMe" element={<MoreAbout />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
