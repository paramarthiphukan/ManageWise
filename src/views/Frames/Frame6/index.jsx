import React from "react";
import CapabilitiesCard from "../../../components/CapabilitiesCard";
import Logo from "../../../assets/logo.webp";
import Button from "../../../components/Button";
import UImg from "../../../assets/userImg.png";

const Frame6 = () => {
  return (
    <div className="frame6">
      <div className="capabilities">
        <div className="row1">
          <div className="col1">
            <div className="main">
              <div className="tipbar">
                <span>👋</span>DON'T MISS OUT
              </div>
            </div>
            <div className="head">
              <div className="title">
                Unleash your <span>Potential</span> with us
              </div>
              <div className="desc">
                Join our community of ambitious individuals and organizations
                eager to make a difference.
              </div>
              <div className="btnCnt">
                <Button type="primary">Try Out Now</Button>
              </div>
            </div>
          </div>
          <div className="col2">
            <div className="buttonText">
              <div className="tipbar">
                <span>200+</span>Happy users
              </div>
            </div>
            <img src={UImg} alt="" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="row1">
          <div className="fleft">
            <img src={Logo} alt="" className="logo" />
          </div>
          <div className="fright">
            <ul>
              <li>Features</li>
              <li>FAQ</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
        <div className="row2">
          <div className="trad">© 2022 ManageWise, Inc.</div>
          <div className="logo">logo1 logo2 logo3</div>
        </div>
      </div>
    </div>
  );
};

export default Frame6;
