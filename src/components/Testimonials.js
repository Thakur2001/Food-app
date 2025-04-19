import React from "react";

class Testimonials extends React.Component {
  render() {
    const testimonials = [
      {
        id: 1,
        name: "Dhruv Thakur",
        role: "Food Blogger",
        text: "The best food delivery experience I've ever had! The variety and quality of restaurants is outstanding.",
      },
      {
        id: 2,
        name: "Prashant Singh",
        role: "Regular Customer",
        text: "Fast delivery and amazing food quality. I order at least twice a week!",
      },
      {
        id: 3,
        name: "Aniket Ray",
        role: "Food Critic",
        text: "The platform makes it so easy to discover new restaurants and cuisines.",
      },
    ];

    return (
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Testimonials;
