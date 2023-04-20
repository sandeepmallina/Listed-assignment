import React from 'react'
import "./DetailPie.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import PieChart from '../Chart-Components/PieChart';
function DetailPie() {
  return (
    <div className="card__conatiner">
    <div className="card__headings">
      <h1 className="card__title">Top products </h1>
      <p className="card__option">
      May - June 2021
        <MdKeyboardArrowRight size="1rem" />
      </p>
    </div>
    <div className="card__details">
    <PieChart/>
    </div>
  </div>
);
  
}

export default DetailPie