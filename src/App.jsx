import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Login from "./Login";
import Candidates from "./Candidates";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/candidates" element={<Candidates />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
