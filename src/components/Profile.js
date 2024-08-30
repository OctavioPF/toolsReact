import React from "react";
import "./Profile.css";

function Profile() {
  const user = {
    name: "Octavio Palacio",
    bio: "Desarrollador frontend con pasión por crear interfaces de usuario atractivas.",
    skills: ["JavaScript", "HTML & CSS", "PHP","MYSQL", "REACT.JS", "VUE.JS"],
    avatar: "https://via.placeholder.com/150",
  };

  return (
    <div className="profile">
      <h2>Perfil</h2>
      <div className="profileCard">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <h3>{user.name}</h3>
        <p>{user.bio}</p>
        <h4>Habilidades</h4>
        <ul className="skills-list">
          {user.skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
