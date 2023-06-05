import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./layoutData";
import { FaTimes, FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Header from "./header";
import "./layout.css";

const Layout = ({ connect }) => {
  const [linkText, setLinkText] = useState("");
  const [dashboard, setDashboard] = useState("");
  const [menuicon, setMenuicon] = useState("show");

  const handleCrossClick = () => {
    if (linkText === "") {
      setLinkText("linkText");
      setDashboard("dashboard");
      setMenuicon("hide");
      document.querySelector(".sidebar").classList.add("closed");
    } else {
      setLinkText("");
      setDashboard("");
      setMenuicon("show");
      document.querySelector(".sidebar").classList.remove("closed");
    }
  };
  return (
    <>
      <Header socket={connect} />
      <div className="container">
        <aside className="sidebar">
          <div className="sidebarTitle">
            <strong className={dashboard}>Dashboard</strong>

            {menuicon === "show" ? (
              <FaTimes className="crossIcon" onClick={handleCrossClick} />
            ) : (
              <FaBars className="barIcon" onClick={handleCrossClick} />
            )}
          </div>
          <ul className="links">
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li key={id}>
                  <Link to={url} className="active">
                    {icon}
                    <span className={linkText}> {text} </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="mainArea">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
