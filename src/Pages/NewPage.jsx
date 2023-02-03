import React from "react";
import "./NewPage.scss";

function NewPage() {
  return (
    <div className="settings-profile">
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
          <button>Change Picture</button>
        </div>
      </div>

      <div className="btn">
        <button>Cancel </button>
        <button>Update </button>
      </div>
    </div>
  );
}

export default NewPage;
