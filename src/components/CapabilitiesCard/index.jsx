import React from 'react'


const CapabilitiesCard = (props) => {
  return (
    <div className="cap-card">
      <div className="img-cnt">
        <img src={props.img} alt="" />
      </div>
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="desc">
          {props.desc}
        </div>
      </div>
    </div>
  );
}

export default CapabilitiesCard