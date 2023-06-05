import React, { useState, useEffect } from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import {Link} from "react-router-dom"
import "./header.css";

const Header = ({ socket }) => {
  const [connectionStatus, setConnectionStatus] = useState("connecting");

  useEffect(() => {
    // handle socket connection error
    socket.on("connect_error", () => {
      setConnectionStatus("error");
    });

    // handle socket connection success
    socket.on("connect", () => {
      setConnectionStatus("success");
    });
  }, [socket]);

  return (
    <div className="header">
      <div className="connection">
        {connectionStatus === "connecting" && "Connecting..."}
        {connectionStatus === "error" && "Server Error"}
        {connectionStatus === "success" && "Connected"}
      </div>
      <div className="btnContainer">
        <Link to={"/login"} className="btn" id="login">
          <FaSignInAlt className="icon" />
          Login
        </Link>
        <Link to={"/signup"} className="btn" id="signup">
          <FaUserPlus className="icon" />
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Header;
