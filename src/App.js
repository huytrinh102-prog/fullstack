import "./App.scss";
import NAV from "./component/nav/Navition";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/login/login";

const App = () => {
  return (
    <>
      <NAV />
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/news" element={<h1>news</h1>} />
        <Route path="/contact" element={<h1>contatc</h1>} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default App;
