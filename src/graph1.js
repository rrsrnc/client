import React from "react";
import IndiTemps from "./inditemps.js";
// import { useState } from 'react';
// import {socket} from './App';
import Sidebar from "./layout.js";
import Graphind from "./graphind.js";

function Graph1(props) {
  const maindata = props.maindata;
  return (
    <>
      <div className="heading">
        <h2>Current Temperatures</h2>
      </div>
      <div className="sub-container">
        <div className="left-sub-container">
          <div className="left-sub-box-container">
            <div className="left-sub-upper-container">
              <div className="y-axis-label">Temperature in &deg;Celcius</div>
              <IndiTemps data={maindata} />
            </div>
            <div className="left-sub-lower-container">
              <div>Time Stamp in hh:mm:ss</div>
            </div>
          </div>
        </div>
        <div className="right-sub-container">
          <p>Current values</p>
          <Graphind
            text={"Temperature 1"}
            color={"#df0000"}
            curval={
              maindata[0]
                ? maindata[0].temperature1
                  ? maindata[0].temperature1
                  : 0
                : 0
            }
          />
          <Graphind
            text={"Temperature 2"}
            color={"#00bf00"}
            curval={
              maindata[0]
                ? maindata[0].temperature2
                  ? maindata[0].temperature2
                  : 0
                : 0
            }
          />
          <Graphind
            text={"Temperature 3"}
            color={"#0000df"}
            curval={
              maindata[0]
                ? maindata[0].temperature3
                  ? maindata[0].temperature3
                  : 0
                : 0
            }
          />
        </div>
      </div>
    </>
  );
}

export default Graph1;
