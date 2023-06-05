import React from "react";
import IndiDef from "./indidef.js";
import Graphind from "./graphind.js";
import "./graph2.css"

function Graph2(props) {
  const maindata = props.maindata;
  return (
    <>
      <div className="heading">
        <h2>Rescent deflection</h2>
      </div>
      <div className="sub-containerGraph2">
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
