import React from "react";
import NavBar from "../components/NavBar";
import ProfilePicture from "../components/ProfilePicture";
import "../styling/AcceptExpert.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
const AcceptAnExpertScreen = () => {
  return (
    <div className="backgroundImage3">
      <NavBar />
      <div className="card">
        <ProfilePicture />
        <span className="infoText">Joseph Tannoury</span>
        <span className="infoText">55 years old</span>
        <span className="infoText">12 years of experience</span>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </div>
        <div className="buttons">
          <TiDeleteOutline className="reject" />
          <AiOutlineCheckCircle className="accept" />
        </div>
      </div>
    </div>
  );
};

export default AcceptAnExpertScreen;
