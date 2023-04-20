import React from 'react'
import "./Detail.css"
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Detail() {
  return (
    <div className="card__conatiner">
      <div className="card__headings">
        <h1 className="card__title">Today's schedule</h1>
        <p className="card__option">
          See All
          <MdKeyboardArrowRight size="1rem" />
        </p>
      </div>
      <div className="card__details">
        <div className="card__detail1">
          <h4>Meeting with suppliers from Kuta Bali</h4>
          <p>14.00-15.00</p>
          <p className='location'>at Sunset Road, Kuta, Bali </p>
        </div>
        <div className="card__detail2">
          <h4>Check operation at Giga Factory 1</h4>
          <p>18.00-20.00</p>
          <p className='location'>Central Jakarta</p>
        </div>
      </div>
    </div>
  );
}
