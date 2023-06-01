import React from "react";
import { useState } from "react";
// import {socket} from './App.js';
import Sidebar from "./layout.js";
import ModelTab from "./modeltab.js";

const options = [
  { index: 0, dtype: "LinearRegression", label: "Linear Regression" },
  { index: 1, dtype: "LASSORegression", label: "LASSO Regression" },
  { index: 2, dtype: "AdaBoost", label: "AdaBoost" },
];

function SelectModel(props) {
  const maindata = props.maindata;
  let socket = props.socket;
  const [selectedindex1, setSelectedindex1] = useState(0);

  const handleOptionChange1 = (event) => {
    // console.log(`Changed selectedindex1 to ${event.target.value}`);
    socket.emit("model_data", options[event.target.value].dtype);
    setSelectedindex1(event.target.value);
    // console.log(`Changed selectedindex1 to ${event.target.value}`);
    // console.log(`Changed selectedindex1 to ${options[event.target.value].dtype}`);
  };
  return (
    <>
      <div className="heading">
        <h2>Change ML model</h2>
      </div>
      <div className="sub-container">
        <div className="sub-container2">
          <div className="upper-sub-container3-1">
            <h4>Selected Machine Learning model</h4>
          </div>
          <div className="upper-sub-container3-2">
            <select value={selectedindex1} onChange={handleOptionChange1}>
              {options.map((option) => (
                <option
                  className="myoptions"
                  key={option.index}
                  value={option.index}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="sub-container2">
          <div className="upper-sub-container4">
            <h4>Deflection data</h4>
            <ModelTab data={maindata} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectModel;
