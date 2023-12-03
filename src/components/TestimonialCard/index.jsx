import React from "react";
import human from "../../assets/user1.png";
const TestimonialCard = (props) => {
  return (
    <div className="test-card">
      <div className="img-cnt">
        <div className="text">{props.desc}</div>
      </div>
      <div className="content">
        <div className="img-profile">
          <img src={human} alt="" />
        </div>
        <div className="title">
          <div className="name">{props.title}</div>
          <div className="desig">{props.desig}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
