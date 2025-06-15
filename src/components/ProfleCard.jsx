import React from "react";
import "../styles/ProfileCard.css";
import defaultImage from "../assets/images/profilepic.jpg";

function ProfileCard({
  profileImage = defaultImage,
  profileName = "Ajemba Joseph Chukwuka",
  profileBio = "I am an easy-going person. I love coding and exploring new technologies. I am currently learning React with KodeCamp. I am also an in-view frontend software developer with a passion for building web applications.",
}) {
  return (
    <div className="card">
      <h2 className="profile-name">{profileName}</h2>
      <img src={profileImage} alt="Profile" className="profile-image" />
      <p className="profile-bio">{profileBio}</p>
    </div>
  );
}

export default ProfileCard;
