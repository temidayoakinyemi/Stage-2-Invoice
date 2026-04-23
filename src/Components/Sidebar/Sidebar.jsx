import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import theme from "../../assets/theme.png";
import avatar from "../../assets/avatar.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebartop">
        <div className="logobox">
          <img src={logo} alt="" className="logoimg" />
        </div> 
      </div>

      <div className="sidebarbottom">
        <img src={theme} alt="" className="themebtn" />

         <div className="avatarbox">
          <img src={avatar} alt="" className="avatarimg" />
        </div> 
      </div>
    </div>
  );
};

export default Sidebar;
