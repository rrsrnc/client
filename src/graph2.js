import React from "react";
import IndiDef from "./indidef.js";
// import { useState } from 'react';
// import {tdata2} from './tabledata'
// import {socket} from './App.js';
import Sidebar from "./layout.js";
import Graphind from "./graphind.js";

function Graph2(props) {
  const maindata = props.maindata;
  return (
    <>
      <div className="heading">
        <h2>Rescent deflection</h2>
      </div>
      <div className="sub-container">
        <div className="left-sub-container">
          <div className="left-sub-box-container">
            <div className="left-sub-upper-container">
              <div className="y-axis-label">Deflection in mm</div>
              <IndiDef data={maindata} />
            </div>
            <div className="left-sub-lower-container">
              <div>Time Stamp in hh:mm:ss</div>
            </div>
          </div>
        </div>
        <div className="right-sub-container">
          <p>Current value</p>
          <Graphind
            text={"Deflection"}
            color={"#6f0000"}
            curval={
              maindata[0]
                ? maindata[0].deflection
                  ? maindata[0].deflection
                  : 0
                : 0
            }
          />
        </div>
      </div>
    </>
  );
}

export default Graph2;
