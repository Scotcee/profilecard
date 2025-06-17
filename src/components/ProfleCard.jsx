import React from "react";
import "../styles/ProfileCard.css";
import defaultImage from "../assets/images/profilepic.jpg";

function ProfileCard(props) {
  return (
    <div className="card">
      <h2 className="profile-name">{props.profileName}</h2>
      <img src={defaultImage} alt="Profile" className="profile-image" />
      <p className="profile-bio">{props.profileBio}</p>
    </div>
  );
}

export default ProfileCard;
