import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
          <div className="shimmer-text"></div>
          <div className="shimmer-text"></div>
          <div className="shimmer-text"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
