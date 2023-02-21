import React from "react";
import Header from "../Component/Header";
import "./Profile.scss";
import { NavLink } from "react-router-dom";

function Profile() {
  return (
    <>
      <Header />
      <div className="settings-profile bg-green-100">
        <div className="input">
          <div className="input-section">
            <span className="name">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </span>
            <span className="organization">
              <label htmlFor="organization">Organization</label>
              <input type="text" id="organization" />
            </span>
            <span className="email">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </span>
            <span className="mobile">
              <label htmlFor="mobile">Mobile</label>
              <input type="text" id="mobile" />
            </span>
            <span className="location">
              <label htmlFor="location">Location</label>
              <input type="text" id="location" />
            </span>
          </div>

          <div className="profileImage">
            <div
              className="img"
              style={{
                backgroundImage: `url(${"https://images.pexels.com/photos/2802403/pexels-photo-2802403.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
              }}
            >
              <button className="closeBtn">X</button>
            </div>
            <button className="bg-green-500">Change Picture</button>
          </div>
        </div>

        <div className="btn px-7">
          <button>Cancel </button>
          <button>Update </button>
          <NavLink to="/home">
            <button>Go to Home</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Profile;
