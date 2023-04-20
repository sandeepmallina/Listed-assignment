import React from "react";
import "./StatBox.css";
import { AiOutlineLike } from "react-icons/ai";
export default function StatBox(props) {
  return (
    <div className="stat__container" style={{backgroundColor: props.color}} >
      <div className="header__section">
        {props.icon}
      </div>
      <div className="info__section">
        <div className="info">
          <h3 className="sub__heading">{props.title}</h3>
          <h4 className="total__revenue">{props.data}</h4>
        </div>
      </div>
    </div>
  );
}

 
