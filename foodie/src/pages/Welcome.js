import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="overlay">
        <h1>Welcome to Foody 🍴</h1>
        <p>Where Creativity meets flavor</p>
        </div>
        <button className="welcome-btn" onClick={() => navigate("/about")}>
          Click here
        </button>
      
    </div>
  );
}

export default Welcome;
