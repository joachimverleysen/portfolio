import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Profile() {
  const { ref: myRef, inView: pictureIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="Profile">
      <div className="text-section">
        <h2 className="section__text__p1">Hi, I'm</h2>
        <h1 className="title">Joachim Verleysen</h1>
        <h2 className="picture__subtitle">Student Computer Science</h2>
        <div className="icon-container">
          <a href="https://github.com/joachimverleysen">
            <img src="./assets/github-logo.png" alt="Github" className="icon" />
          </a>
        </div>
      </div>
      <div className="profile-pic-container">
        <img
          ref={myRef}
          src="./travel/profile-pic3.png"
          alt="Profile Picture"
          className={`profile-pic hidden ${pictureIsVisible ? "show" : ""}`}
        />
        {/* <div className="picture-text__p2"></div> */}
      </div>
    </div>
  );
}

export default Profile;
