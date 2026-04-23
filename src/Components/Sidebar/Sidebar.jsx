import React from "react";
import "./Sidebar.css";

const Sidebar = ({ toggleTheme, darkMode }) => {
  return (
    <div className="sidebar">
      <div className="sidebartop">
        <div className="logobox">
          <h2 style={{ color: "white" }}>F</h2>
        </div>
      </div>

      <div className="sidebarbottom">
        <button className="themebtn" onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <div className="avatarbox">
          <img
            className="avatarimg"
            src="https://i.pravatar.cc/40"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
