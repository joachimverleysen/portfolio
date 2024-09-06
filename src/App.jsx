import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/profile/Header";
import IntroText from "./components/profile/IntroText";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";

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
