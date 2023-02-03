import React, { useState } from "react";
import "./General.scss";
import NavBar from "./NavBar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

function General() {
  const [value, setValue] = useState(undefined);
  const [value2, setValue2] = useState(undefined);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div className="general">
      <NavBar />
      <div className="input-section">
        <div className="flex flex-column gap-2">
          <label htmlFor="Country">Country</label>
          <Dropdown
            inputId="Country"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            style={{ height: "40px" }}
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="State">State</label>
          <Dropdown
            inputId="State"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            style={{ height: "40px" }}
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="City">City</label>
          <Dropdown
            inputId="City"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            style={{ height: "40px" }}
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="Exam">Exam</label>
          <Dropdown
            inputId="Exam"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            style={{ height: "40px" }}
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="Category">Category</label>
          <Dropdown
            inputId="Category"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            style={{ height: "40px" }}
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="Sub Category">Sub Category</label>
          <Dropdown
            inputId="Sub Category"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            style={{ height: "40px" }}
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="Exam Type">Exam Type</label>
          <Dropdown
            inputId="Exam Type"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            style={{ height: "40px" }}
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="Sponsor">Sponsor</label>
          <Dropdown
            inputId="Sponsor"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            style={{ height: "40px" }}
          />
        </div>
      </div>
      <div className="btn">
        <button>Cancel </button>
        <button>Save as Draft </button>
        <button>Create</button>
      </div>
    </div>
  );
}

export default General;
