import React from "react";

const Button = (props) => {
  return (
    <div
      className="btn"
      style={
        props.type === "primary"
          ? { backgroundColor: "rgb(131, 78, 237)", color: "white" }
          : {}
      }
    >
      {...props.children}
    </div>
  );
};

export default Button;
