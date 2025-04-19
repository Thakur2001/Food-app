import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <div className="about-card">
          <h2>Our Story</h2>
          <p>
            Welcome to Foodie, your ultimate destination for discovering and ordering from the best restaurants in town. 
            We're passionate about connecting food lovers with amazing dining experiences.
          </p>
        </div>
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make food ordering simple, fast, and enjoyable. 
            We strive to provide the best service while supporting local restaurants and delivering exceptional culinary experiences to our customers.
          </p>
        </div>
        <div className="about-card">
          <h2>Why Choose Us?</h2>
          <ul className="features-list">
            <li>Wide selection of restaurants</li>
            <li>Fast and reliable delivery</li>
            <li>Easy-to-use platform</li>
            <li>Secure payment options</li>
            <li>24/7 customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
