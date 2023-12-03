import React, { useEffect, useState } from "react";
import dashboard from "../../assets/dashboard.webp";
import Button from "../../components/Button";

const Hero = () => {
  const [scale, setScale] = useState(1);
  const [isIcon, setisIcon] = useState(false);
  document.addEventListener("scroll", function (e) {
    let offset = window.scrollY;
    let count = offset / 10;

    console.log(count);
    if (count > 1 && count < 100) setScale(scale + count * 0.00004);
    else if (count > 100) setScale(scale);
    else setScale(1);
  });
  const handleIcon = () => {
    console.log(1);
    setisIcon(true);
  };
  return (
    <div className="hero">
      <div className="main">
        <div className="tipbar">
          <span>👋</span> WELCOME TO MANAGE WISE!
        </div>
        <div className="head">
          <div className="title">
            Empower your business with <span>Strategic</span> insights
          </div>
          <div className="desc">
            Powerful management platform designed to streamline your business
            operations, boost productivity, and drive success
          </div>

          <div className="btnCnt">
            <div
              onMouseEnter={() => setisIcon(true)}
              onMouseLeave={() => setisIcon(false)}
              className="dv"
            >
              <Button type="primary">
                Get Started
                {isIcon && <i class="fa-solid fa-circle-arrow-right"></i>}
              </Button>
            </div>
            <Button>Watch Demo</Button>
          </div>
        </div>
      </div>

      <div className="dashboard" style={{ transform: `scale(${scale})` }}>
        <img src={dashboard} alt="" />
      </div>
    </div>
  );
};

export default Hero;
