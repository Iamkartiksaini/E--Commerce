import React, { useState } from "react";
import "./WinnerReport.scss";
import { Dropdown } from "primereact/dropdown";

function WinnerReport() {
  const [value, setValue] = useState("All");
  const [value2, setValue2] = useState(undefined);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div className="WinnerReport">
      <div className="text">
        <h3>Winners Report </h3>
        <p>
          (To export winners list you need to select from the following filters)
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
          <label htmlFor="Contest-Type">Contest-Type</label>
          <Dropdown
            inputId="Contest-Type"
            value={value}
            options={cities}
            onChange={(e) => setValue(e.value)}
            optionLabel="name"
            placeholder={value}
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
            placeholder={value}
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

export default WinnerReport;
