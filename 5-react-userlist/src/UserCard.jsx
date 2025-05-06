import React from "react";
import age from "./assets/age.png";
import address from "./assets/location-pin.png";

function UserCard(props) {
  return (
    <>
      <div className="container">
        <div className="cardWrapper">
          <div className="userCard">
            <div className="imgSection">
              <img
                className="userImage"
                src={props.userAvatarImg}
                alt="Avatar Api"
              />
            </div>
            <div className="nameSection">
              <p className="userName">{props.userName}</p>
            </div>
            <div className="ageSection">
              <img className="Icons" src={age} alt="Age Icon" />
              <p className="ageNumb">{props.userAge}</p>
            </div>
            <div className="addessSection">
              <img className="Icons" src={address} alt="Address Icon" />
              <p className="userAddres">{props.userAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserCard;
