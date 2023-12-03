import React, { useState, useRef, useEffect } from "react";
// import { FiPlus } from "react-icons/fi";

export default function App(props) {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="FApp">
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className={` ${active ? "activeQn" : ""} question-style`}>
                  {props.qn}
                </h4>
                <div className={` ${!active ? "plus" : "cross"} icon`}>
                  {!active ? "+" : "✖"}
                </div>
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>{props.ans}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
