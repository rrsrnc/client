import React from "react";
import { useState } from "react";

function Dataload(props) {
  // const maindata = props.maindata;
  const [date, setDate] = useState("");
  const [convertedDate, setConvertedDate] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
    const dateObj = new Date(event.target.value);
    const day = dateObj.getDate().toString();
    const month = (dateObj.getMonth() + 1).toString();
    // const day = dateObj.getDate().toString().padStart(2, '0');
    // const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear().toString();
    const formattedDate = `${day}-${month}-${year}`;
    console.log(formattedDate);
    setConvertedDate(formattedDate);
  };

  const handleDownloadClick = async () => {
    console.log("Sending Download request");
    const response = await fetch(
      `http://localhost:5000/api/v1/download?date=${convertedDate}`,
      {
        method: "GET",
        // headers: {
        //   'Content-Type': 'blob',
        // }
      }
    ).catch(()=>{
      alert("Server Error : Download failed")
    });
    // const url = window.URL.createObjectURL(new Blob([response.data]));
    // const link = document.createElement('a');
    // link.href = url;
    // link.setAttribute('download', `data${convertedDate}.xlsx`);
    // document.body.appendChild(link);
    // link.click();
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tempdef${convertedDate}.xlsx`;
    a.click();
  };
  return (
    <>
      <div className="heading">
        <h2>Download data excel format</h2>
      </div>
      <div className="sub-container3">
        <div className="subsub-c3">
          <div className="subsub-cs1">
            {/* <label htmlFor="date-input">Enter a date:</label> */}
            <input
              type="date"
              id="date-input"
              value={date}
              onChange={handleDateChange}
            />
            {/* <button onClick={handleConvertClick}>Convert to string</button> */}
            {/* <p>{convertedDate}</p> */}
          </div>
          <div className="subsub-cs2">
            <button onClick={handleDownloadClick}>Download file</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dataload;
