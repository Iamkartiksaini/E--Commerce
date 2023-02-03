import React from "react";
import "./NewPage.scss";
function ForgetPassword() {
  return (
    <div className="settings-password">
      <div className="input-section">
        <span className="current-password">
          <label htmlFor="current-password">Current password</label>
          <input
            type="text"
            id="current-password"
            placeholder="Current password"
          />
        </span>
        <span className="new-password">
          <label htmlFor="new-password">New password</label>
          <input type="text" id="new-password" placeholder="New password " />
        </span>
        <span className="Confirm">
          <label htmlFor="Confirm">Confirm password</label>
          <input type="text" id="Confirm" placeholder="Confirm password" />
        </span>
      </div>
      <div className="btn">
        <button>Cancel </button>
        <button>Update </button>
      </div>
    </div>
  );
}

export default ForgetPassword;
