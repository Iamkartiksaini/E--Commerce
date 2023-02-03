import React, { useState } from "react";
import "./Contest.scss";
import NavBar from "./NavBar";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";

function Contest() {
  const [value, setValue] = useState(undefined);
  const [value2, setValue2] = useState(undefined);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div className="contest">
      <NavBar />

      <div className="input-section">
        <div className="flex flex-column gap-2">
          <label htmlFor="name">Name</label>
          <InputText
            id="name"
            value={value}
            placeholder="Name"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="date">Start Date</label>
          <Calendar id="icon" showIcon placeholder="DD/MM/YYYY" />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="date">End Date</label>
          <Calendar id="icon" showIcon placeholder="DD/MM/YYYY" />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="number-input">No. of MCQs</label>
          <InputNumber
            id="number-input"
            value={value}
            onValueChange={(e) => setValue(e.value)}
            placeholder="No. of MCQs"
          />
        </div>

        <div className="flex flex-column gap-2">
          <label htmlFor="Start-Time">Start Time</label>
          <input
            type="time"
            name="Start-Time"
            id="Start-Time"
            placeholder="HH:MM"
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="End-Time">End Time</label>
          <input
            type="time"
            name="End-Time"
            id="End-Time"
            placeholder="HH:MM"
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="Eligibility">Eligibility</label>
          <Dropdown
            inputId="Eligibility"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            style={{ height: "40px" }}
            placeholder="Select"
          />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="Description">Description</label>
          <InputText
            id="Description"
            value={value2}
            placeholder="Write"
            onChange={(e) => setValue2(e.target.value)}
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

export default Contest;
