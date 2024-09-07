import { useState, useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
    </>
  );
}

export default App;
