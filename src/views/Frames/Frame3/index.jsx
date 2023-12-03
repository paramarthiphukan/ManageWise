import React, { useState } from "react";
import arr from "../../../assets/faq";
import FAQSide from "../../../components/FAQSlide";
const Frame3 = () => {
  const [toggle, setToggle] = useState(false);
  const [idd, setIdd] = useState(-1);
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };

  return (
    <div className="frame3">
      <div className="main">
        <div className="heading-wrapper">
          <div
            onClick={handleToggle}
            className={` ${toggle ? "plus" : "cross"} icon`}
          >
            🙋‍♀️FAQ
          </div>
          <div className="heading">
            Need <br /> <span> Answers?</span>
          </div>
          <div className="texts">
            Check out our most commonly asked questions below to find the
            information you need.
          </div>
        </div>
        <div className="faq-question">
          <div className="questions">
            <div className="main-q">
              {arr.map((e) => {
                return <FAQSide qn={e.qn} ans={e.ans} />;
              })}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
