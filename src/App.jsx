import { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfleCard";

function App() {
  return (
    <>
      <div className="card">
        <ProfileCard
          profileName="Ajemba Joseph Chukwuka"
          profileBio="I am an easy-going person from Lagos State. I love coding and exploring new technologies. I am currently learning React with KodeCamp. I am also an in-view frontend software developer with a passion for building web applications."
        />
      </div>
    </>
  );
}

export default App;
