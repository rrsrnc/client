import React from "react";
import { useState } from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import "./authForm.css";

const Login = () => {
  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="btn">
          <FaSignInAlt className="icon" />
          Login
        </button>
      </form>
    </div>
  );
};

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
  };

  return (
    <div className="auth-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {!passwordMatch && <p className="error">Passwords do not match</p>}
        <button type="submit" className="btn">
          <FaUserPlus className="icon" />
          Signup
        </button>
      </form>
    </div>
  );
};


export { Login, Signup };
