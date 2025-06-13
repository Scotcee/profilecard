import React from "react";
import "../styles/ProfileCard.css";
import defaultImage from "../assets/images/profilepic.jpg";

function ProfileCard({
  profileImage = defaultImage,
  profileName = "Ajemba Joseph Chukwuka",
  profileBio = "Bio: I am an easy-going person. I love coding and exploring new technologies. I am currently learning React with KodeCamp. I am also an in-view frontend software developer with a passion for building web applications.",
}) {
  return (
    <div className="card">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h2 className="profile-name">{profileName}</h2>
      <p className="profile-bio">{profileBio}</p>
      <button className="connect-button">Connect</button>
    </div>
  );
}

export default ProfileCard;
