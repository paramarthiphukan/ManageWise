import React from "react";
import Button from "../Button";

const PricingCard = (props) => {
  return (
    <div
      className={`${props.type === "primary" ? "price-p-card" : "price-card"}`}
    >
      <div className="tag">{props.model}</div>
      <div className="price">
        ${props.price}
        <span>/month</span>
      </div>
      <div className="cnt">
        {props.details.map((detail) => {
          return (
            <div>
              <i class="fa-solid fa-check hi"></i>
              {detail}
            </div>
          );
        })}
      </div>
      <div style={{ display: "inline-block", marginTop: "1rem" }}>
        <Button type={props.type}>Get Started</Button>
      </div>
    </div>
  );
};

export default PricingCard;
