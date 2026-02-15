import myPhoto from "../assets/20240816_151214.jpg"
import "./ProfileCard.css"

export default function ProfileCard() {
  const name = "Guhan B";
  const role = "Java Developer";
  const experience = 2;
  const isActive = true;

  return (
    <>
      <div className="card">
        <img
          src={myPhoto}
          alt="profile"
          className="profile-img"
        ></img>
        <h2>{name}</h2>
        <p className="role">Role : {role}</p>
        <p>Experiance : {experience} Years</p>
        <p>Status : {isActive ? "Active" : "Inactive"}</p>
      </div>
    </>
  );
}
