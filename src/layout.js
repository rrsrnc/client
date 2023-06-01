import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FaTimes } from 'react-icons/fa'
import { links } from "./layoutData";
import { FaTimes } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = ({connect}) => {
  const [sidebarClass, setSidebarClass] = useState("Show");

  const handleCrossClick = () => {
    setSidebarClass("hide");
  };
  return (
    <>
      <div className="container">
        <aside className="sidebar">
            <div className="heading">
              <strong>Dashboard</strong>
              {/* <FaTimes className="crossIcon" onClick={handleCrossClick} /> */}
            </div>
            <ul className="links">
              {links.map((link) => {
                const { id, url, text, icon } = link;
                return (
                  <li key={id}>
                    <Link to={url} className="active">
                      {icon}
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        <div className="mainArea">
          <div className="connection">{connect.connected?'':'Server Error'}</div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
