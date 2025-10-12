import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleUserInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">Invesync</div>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        {isAuthenticated && (
          <li>
            <Link to="/portfolio" className="nav-item">
              Portfolio
            </Link>
          </li>
        )}
        <li>
          <Link to="/analytics" className="nav-item">
            Analytics
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">
            About
          </Link>
        </li>

        {isAuthenticated ? (
          <>
            <li className="nav-item welcome-msg" onClick={toggleUserInfo}>
              <FaUser /> Welcome, {user.name}!
            </li>

            {showInfo && (
              <li className="user-info-dropdown">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </li>
            )}

            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" className="nav-item">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
