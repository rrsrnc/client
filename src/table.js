import React from "react";
import Num2 from "./num2.js";
// import { useState } from 'react';
// import { FaBars } from 'react-icons/fa'
// import { useState, useEffect } from 'react'
// import {tdata2} from './tabledata.js'
// import { GiManualMeatGrinder } from 'react-icons/gi'
// import {socket} from './App.js'
// import Sidebar from "./Sidebar.js";

function Table(props) {
  const maindata = props.maindata;
  // const setDatalen = props.setDatalen;
  // const [inputValue, setInputValue] = useState(0);

  // const handleInputChange = (event) => {
  //   const newValue = Number(event.target.value);
  //   setInputValue(newValue);
  // };

  // const handleButtonClick = () => {
  //   setDatalen(inputValue);
  // };
  return (
    <>
      <div className="heading">
        <h2>Tabular representation</h2>
      </div>
      <div className="sub-container">
        <div className="subsub-c">
          {/* <div>
                <label>
                  Enter a number:
                  <input type="number" value={inputValue} onChange={handleInputChange} />
                </label>
                <button onClick={handleButtonClick}>Update value</button>
              </div> */}
          <Num2 data={maindata} />
        </div>
      </div>
    </>

    // <main>
    //   <div /*className='boxdiv'*/>
    //     <div style={{margin:'4 rem'}}>
    //         Deflection data
    //       </div>
    //     <Num2 data={maindata}/>
    //   </div>
    // </main>
  );
}

export default Table;
