import React from "react";
import "./TopNavbar.css";
import { RiSearchLine } from "react-icons/ri";

import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
export default function TopNavbar() {
  return (
    <div className="nav__bar">
      <h1 className="nav__title">DashBoard</h1>

      <div className="nav__options">
        <div className="search__box">
          <input
            type="text"
            placeholder="Search.."
            className="input__box"
            name="search"
          />
          <span>
            <RiSearchLine className="search__icon" />
          </span>
        </div>
        <span>
          <BsBell size="1.5rem" />
        </span>
        <img
          alt="profile"
          className="profile__image"
          src="https://i.pinimg.com/736x/de/91/0d/de910d0f1f37fcf075a633a0ff43c48e.jpg"
        />
      </div>
    </div>
  );
}
