import React from "react";
import Num2 from "./num2.js";
import "./table.css";

function Table(props) {
  const maindata = props.maindata;

  return (
    <>
      <div className="sub-containerTable">
        <div className="sub-container">
          <div className="heading">
            <h2>Tabular representation</h2>
          </div>
          <div className="subsub-c">
            <Num2 data={maindata} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
