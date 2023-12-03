import React from "react";
import ProductivityCard from "../../../components/ProductivityCard";
import Img from "../../../assets/pImg.webp";
import IconParallex from "../../../components/IconParallex";
const Frame2 = () => {
  return (
    <div className="frame2">
      <div className="main">
        <div className="tipbar">
          <span>🤩</span>
          AND MORE...
        </div>
        <div className="head">
          <div className="title">
            Explore an array of features that elevate your{" "}
            <span>Productivity</span> to new heights
          </div>
          <div className="desc">
            Discover the tools that will revolutionize the way you manage and
            optimize your operations
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 5rem",
        }}
      >
        <ProductivityCard
          title="Cross-Platform Compatibility"
          desc="Enjoy the flexibility of cross-platform compatibility. Our product
          works seamlessly across desktop, web, and mobile devices, allowing you
          to work from your preferred device."
        />
        <ProductivityCard
          title="Stay Informed with Essential Notifications"
          desc="Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
        />
        <ProductivityCard
          title="Secure Data Encryption at all times"
          desc="Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
        />
      </div>
      <div className="parallex">
        {/* icons */}
        {/* <div className="icons">
          <div className="icon1">
            <IconParallex id={1} />
          </div>
          <div className="icon2">
            <IconParallex id={2} />
          </div>
          <div className="icon3">
            <IconParallex id={3} />
          </div>
          <div className="icon4">
            <IconParallex id={4} />
          </div>
          <div className="icon5">
            <IconParallex id={5} />
          </div>
          <div className="icon6">
            <IconParallex id={6} />
          </div>
          <div className="icon7">
            <IconParallex id={7} />
          </div>
          <div className="icon8">
            <IconParallex id={8} />
          </div>
          <div className="icon9">
            <IconParallex id={9} />
          </div>
          <div className="icon10">
            <IconParallex id={10} />
          </div>
        </div> */}
        <div className="content">
          <div className="main">
            <div className="tipbar">
              <span> 🛠</span> INTREGRATIOns
            </div>
            <div className="head">
              <div className="title">
                Enable <span> integration </span> with other popular tools and
                platforms
              </div>
              <div className="desc">
                Seamlessly connect and amplify your workflow by enabling
                integration with a diverse array of widely-used tools and
                platforms.
              </div>
              <img src={Img} alt="" className="p-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
