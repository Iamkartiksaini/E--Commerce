import React, { useState } from "react";
import NavBar from "./NavBar";
import "./Prizes.scss";
import { InputText } from "primereact/inputtext";

function Prizes() {
  const [value, setValue] = useState(undefined);
  const [value2, setValue2] = useState("₹20,000 Voucher from amazon");

  const [fields, setFields] = useState([
    { RankNumber: 1, Desciption: value2 },
    { RankNumber: 2, Desciption: value2 },
  ]);
  function IncreaseFields() {
    setFields([
      ...fields,
      {
        RankNumber: fields.length + 1,
        Desciption: "₹20,000 Voucher from amazon",
      },
    ]);
  }
  function updateListItem(itemIndex) {}

  function removeListItem(itemIndex) {
    console.log("Delete Request", itemIndex);
    if (fields.length > 1) {
      fields.pop();
      setFields([...fields]);
    }
  }

  return (
    <div className="prizesPage">
      <NavBar />
      <div className="head ">
        <h3>Prizes</h3>
        <button onClick={IncreaseFields}>Add</button>
      </div>
      <div className="rank_Desciptions">
        {fields.map((field_value, index) => {
          return (
            <li key={index}>
              <span className="p-float-label">
                <InputText
                  id="rank"
                  value={undefined}
                  onChange={(e) => setValue(e.target.value)}
                  style={{ height: "40px" }}
                />
                <label htmlFor="rank" style={{ top: "20px" }}>
                  Rank-{field_value.RankNumber}
                </label>
              </span>
              <span className="p-float-label">
                <InputText
                  id="description"
                  value={field_value.Desciption}
                  onChange={(e) => setValue2(e.target.value)}
                  style={{ height: "40px" }}
                />
                <label htmlFor="description" style={{ top: "20px" }}>
                  Description
                </label>
              </span>
              <button
                onClick={() => {
                  return removeListItem(field_value.RankNumber);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </div>
      <div className="btn">
        <button>Cancel </button>
        <button>Save as Draft </button>
        <button>Create</button>
      </div>
    </div>
  );
}

export default Prizes;
