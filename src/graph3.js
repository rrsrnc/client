import React from "react";
import { useState } from "react";
import Gengraph from "./gengraph.js";
import "./graph3.css";

const options = [
  {
    index: 0,
    dtype: "temperature1",
    label: "Temperature 1",
    color: "#df0000",
    ylabel: `Temperature in \u00B0 Celcius`,
  },
  {
    index: 1,
    dtype: "temperature2",
    label: "Temperature 2",
    color: "#00bf00",
    ylabel: `Temperature in \u00B0 Celcius`,
  },
  {
    index: 2,
    dtype: "temperature3",
    label: "Temperature 3",
    color: "#0000df",
    ylabel: `Temperature in \u00B0 Celcius`,
  },
  {
    index: 3,
    dtype: "deflection",
    label: "Deflection",
    color: "#6f0000",
    ylabel: "Deflection in mm",
  },
  {
    index: 4,
    dtype: "Alltemperatures",
    label: "All Temperatures",
    color: "#000000",
    ylabel: `Temperature in \u00B0 Celcius`,
  },
];

function Graph3(props) {
  const maindata = props.maindata;
  const [selectedindex1, setSelectedindex1] = useState(0);
  // const [selecteddtype1, setSelecteddtype1] = useState("temp1");
  // const [selectedcolor1, setSelectedcolor1] = useState("#8884d8");
  const [selectedindex2, setSelectedindex2] = useState(3);
  // const [selecteddtype2, setSelecteddtype2] = useState("deflection");
  // const [selectedcolor2, setSelectedcolor2] = useState("#1899a5");

  const handleOptionChange1 = (event) => {
    console.log(`Changed selectedindex1 to ${event.target.value}`);
    setSelectedindex1(event.target.value);
    console.log(`Changed selectedindex1 to ${event.target.value}`);
    console.log(
      `Changed selectedindex1 to ${options[event.target.value].dtype}`
    );
  };
  const handleOptionChange2 = (event) => {
    console.log(`Changed selectedindex1 to ${event.target.value}`);
    setSelectedindex2(event.target.value);
  };
  return (
    <>
      <div className="heading">
        <h2>Compare Graphs</h2>
      </div>
      <div className="grid">
        <div className="sub-container2">
          <div className="upper-sub-container2">
            <select value={selectedindex1} onChange={handleOptionChange1}>
              {options.map((option) => (
                <option key={option.index} value={option.index}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="lower-sub-container2">
            <div className="lsc2-lev1">
              <div className="y-axis-label2">
                {options[selectedindex1].ylabel}
              </div>
              <Gengraph
                graphtype={options[selectedindex1].dtype}
                color={options[selectedindex1].color}
                maindata={maindata}
              />
            </div>
            <div className="lsc2-lev2">
              <div>Time Stamp in hh:mm:ss</div>
            </div>
          </div>
        </div>
        <div className="sub-container2">
          <div className="upper-sub-container2">
            <select value={selectedindex2} onChange={handleOptionChange2}>
              {options.map((option) => (
                <option key={option.index} value={option.index}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="lower-sub-container2">
            <div className="lsc2-lev1">
              <div className="y-axis-label2">
                {options[selectedindex2].ylabel}
              </div>
              <Gengraph
                graphtype={options[selectedindex2].dtype}
                color={options[selectedindex2].color}
                maindata={maindata}
              />
            </div>
            <div className="lsc2-lev2">
              <div>Time stamp in hh:mm:ss</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graph3;
