import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/About.css";

function About() {
  return (
    <>
      <NavBar />
      
      <div className="about-container">
        <div className="about-content">
          <h1>The Story Behind FOODY</h1>
          <p>Food is a universal way for people to connect, learn and express creativity.
            A recipe-sharing website makes it easier to discover diverse meals, try new ideas 
            and adopt healthier lifestyle.
            For many women, cooking is a source of creativity, identity and even icome .
            A website like FOODY allows them to share ther skills, preserve traditions, 
            built a brand and even start small home-based businesses. 
            It creates a supportive community that empowers women and helps them 
            turn their passion into something meaningful.
      
          </p>
          <h2>THANK YOU FOR READING THE STORY BEHIND FOODY...</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
