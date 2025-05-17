import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Home() {
  const [helloMessage, setHelloMessage] = useState(null);

  const toggleHelloMessage = () => {
    if (helloMessage) {
      setHelloMessage(null);
    } else {
      setHelloMessage("Hello");
    }
  };

  useEffect;
  return (
    <div id="Home">
      <div className="hello-container">
        <button
          className="clickme-btn hello-btn hover"
          onClick={toggleHelloMessage}
        >
          Click Me!
        </button>
        <div className="hello-message hover">{helloMessage}</div>
      </div>
    </div>
  );
}

export default Home;
