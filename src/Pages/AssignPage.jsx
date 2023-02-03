import React, { useState } from "react";
import "./Assign.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";
import NavBar from "./NavBar";

function AssignPage() {
  const [value, setValue] = useState(undefined);
  const [value2, setValue2] = useState(undefined);
  const [value3, setValue3] = useState(undefined);
  const [value4, setValue4] = useState(undefined);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div className="AssignPage">
      <NavBar />

      <div className="input-section">
        <span className="p-float-label">
          <Dropdown
            inputId="Designer"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            style={{ height: "40px" }}
          />
          <label htmlFor="Designer" style={{ top: "20px" }}>
            Designer
          </label>
        </span>
        <span className="p-float-label">
          <InputText
            id="Comment"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            style={{ height: "40px" }}
          />
          <label htmlFor="Comment" style={{ top: "20px" }}>
            Comment
          </label>
        </span>
        <span className="p-float-label">
          <Dropdown
            inputId="Super SME"
            value={value3}
            options={cities}
            onChange={(e) => setValue3(e.value)}
            optionLabel="name"
            style={{ height: "40px" }}
          />
          <label htmlFor="Super SME">Super SME</label>
        </span>
        <span className="p-float-label">
          <InputText
            id="Comment"
            value={value4}
            onChange={(e) => setValue4(e.target.value)}
            style={{ height: "40px" }}
          />
          <label htmlFor="Comment" style={{ top: "20px" }}>
            Comment
          </label>
        </span>
      </div>
      <div className="upload-file">
        <span className="text">
          <h2>
            <b>Contest Image</b>{" "}
          </h2>
          <p className="paragraph">
            (if you have your own contest image upload below)
          </p>
        </span>
        <div className="upload-Image">
          <h3>Drag & Drop your file here</h3>
          <h3>OR</h3>
          <div className="card">
            <label htmlFor="input">Choose file</label>
            <input type="file" name="" id="input" />
          </div>
          <p className="paragraph">
            Accepted file types (.jpeg, .png), Dimension is 1024x1024 pixels &
            limit is upto 5mb
          </p>
        </div>
        <div
          className="advertise"
          style={{
            backgroundImage: `url(${"https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
          }}
        ></div>
      </div>
      <div className="btn">
        <button>Cancel </button>
        <button>Save as Draft </button>
        <button>Update </button>
      </div>
    </div>
  );
}

export default AssignPage;
