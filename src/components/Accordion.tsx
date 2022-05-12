import React, { useState } from "react";
import arrowDown from "../images/icon-arrow-down.svg";
// import arrowUp from '../images/icon-arrow-up.svg'

interface Props {
  title: string;
  answer: string;
}

export const Accordion = ({ title, answer }: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div
        className={`accordion-title ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>
          {isActive ? (
            <img className="arroDown" src={arrowDown} alt="arrowUp" />
          ) : (
            <img src={arrowDown} alt="arrowDown" />
          )}
        </div>
      </div>
      {isActive && <div className="accordion-content">{answer}</div>}
    </div>
  );
};
