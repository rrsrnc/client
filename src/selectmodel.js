import React, { useEffect } from "react";
import { useState } from "react";
import ModelTab from "./modeltab.js";
import "./selectmodel.css";

const options = [
  { index: 0, dtype: "LinearRegression", label: "LinearRegression" },
  { index: 1, dtype: "LASSORegression", label: "LASSORegression" },
  { index: 2, dtype: "AdaBoost", label: "AdaBoost" },
];

function SelectModel(props) {
  const maindata = props.maindata;
  let socket = props.socket;
  let MLmodel = maindata[0].MLmodel;

  const [index, setIndex] = useState(0);
  const [selectedindex1, setSelectedindex1] = useState(index);

  useEffect(() => {
    
    for (let i = 0; i < options.length; i++) {
      if (options[i].label === MLmodel) {
        setIndex(i);
        setSelectedindex1(index);
        // console.log(MLmodel)
      }
    }
  }, [MLmodel, index]);
  const handleOptionChange1 = (event) => {
    socket.emit("model_data", options[event.target.value].dtype);
    setSelectedindex1(event.target.value);
  };
  return (
    <>
      <div className="heading">
        <h2>Change ML model</h2>
      </div>
      <div className="sub-containerSelectModel">
        <div className="sub-container2">
          <div className="upper-sub-container3-1">
            <h3>Selected Machine Learning model</h3>
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
            <h3>Deflection data</h3>
            <ModelTab data={maindata} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectModel;
