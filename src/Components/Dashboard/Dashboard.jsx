import React from "react";
import "./Dashboard.css";
import InvoiceCard from "../InvoiceCard/InvoiceCard";
import plus from "../../assets/plus.png";
import downicon from "../../assets/downicon.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboardtop">
        <div className="dashboardtext">
          <h1 className="dashboardh1">Invoices</h1>
          <p className="dashboardp">There are 7 total invoices</p>
        </div>

        <div className="dashboardright">
          <div className="filterbox">
            <p className="filtertext">Filter by status</p>
            <span className="filtericon">
              <img src={downicon} alt="" />
            </span>
          </div>

          <button className="newinvoicebtn">
            <span className="plusicon">
              <img src={plus} alt="" />
            </span>
            New Invoice
          </button>
        </div>
      </div>

      <div className="dashboardcards">
        <InvoiceCard />
      </div>
    </div>
  );
};

export default Dashboard;
