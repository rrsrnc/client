import React, { useState } from "react";
import "./dataload.css";

function Dataload(props) {
  const [date, setDate] = useState("");
  const [convertedDate, setConvertedDate] = useState("");
  const [downloadStatus, setDownloadStatus] = useState({
    status: "",
    message: "",
  });

  const handleDateChange = (event) => {
    setDate(event.target.value);
    setDownloadStatus({ status: "", message: "" });
    const dateObj = new Date(event.target.value);
    const day = dateObj.getDate().toString();
    const month = (dateObj.getMonth() + 1).toString();
    const year = dateObj.getFullYear().toString();
    const formattedDate = `${day}-${month}-${year}`;
    setConvertedDate(formattedDate);
  };

  const handleDownloadClick = async () => {
    if (convertedDate !== "") {
      try {
        setDownloadStatus({ status: "downloading", message: "Downloading..." });

        const response = await fetch(
          `http://localhost:5000/api/v1/download?date=${convertedDate}`,
          {
            method: "GET",
          }
        );

        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `tempdef_${convertedDate}.xlsx`;
          a.click();
          setDownloadStatus({
            status: "downloadSuccess",
            message: "Download Successful..",
          });
        } else {
          throw new Error("Download failed");
        }
      } catch (error) {
        setDownloadStatus({
          status: "downloadFail",
          message: "Server Error: Download failed",
        });
      }
    } else {
      setDownloadStatus({
        status: "downloadFail",
        message: "Please select a date",
      });
    }
  };

  return (
    <>
      <div className="heading">
        <h2>Download data excel format</h2>
      </div>
      <div className="sub-container3">
        <div className="subsub-c3">
          <div className="subsub-cs1">
            <input
              type="date"
              id="date-input"
              value={date}
              max={new Date().toISOString().split("T")[0]}
              onChange={handleDateChange}
            />
            <div className={downloadStatus.status}>
              {downloadStatus.message}
            </div>
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
