import React, { useState } from "react";
import "./Report.scss";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

function Report() {
  const [value, setValue] = useState("All");
  const [value2, setValue2] = useState(undefined);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <div className="report">
      <div className="text">
        <h3>Contest Report </h3>
        <p>
          (To export contest report you need to select from the following
          filters)
        </p>
      </div>
      <div className="input-section">
        <div className="flex flex-column gap-2">
          <label htmlFor="Contest">Contest</label>
          <Dropdown
            inputId="Contest"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            placeholder={value}
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="Type">Type</label>
          <Dropdown
            inputId="Type"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            placeholder={value}
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="Level">Level</label>
          <Dropdown
            inputId="Level"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            placeholder={value}
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="date">Start Date</label>
          <Calendar id="icon" showIcon placeholder="DD/MM/YYYY" />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="date">End Date</label>
          <Calendar id="icon" placeholder="DD/MM/YYYY" showIcon />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="Duration">Duration</label>
          <input
            type="time"
            name="Duration"
            id="Duration"
            placeholder="HH:MM"
          />
        </div>
      </div>
      <div className="btn">
        <button>Cancel </button>
        <button>Export </button>
      </div>
    </div>
  );
}

export default Report;
