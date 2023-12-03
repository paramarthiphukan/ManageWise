import React from 'react'

const ProductivityCard = (props) => {
  return (
    <div className="prod-card">
      <div className="icon">$</div>
      <div className="cnt">
        <div className="title">{props.title}</div>
        <div className="desc">
          {props.desc}
        </div>
      </div>
    </div>
  );
}

export default ProductivityCard