import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./InvoiceDetails.css";

const InvoiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="invoiceDetails">
      <p className="goback" onClick={() => navigate(-1)}>
        ← Go back
      </p>

      <div className="statuscard">
        <span className="statuslabel">Status</span>
        <button className="status pending">Pending</button>
      </div>

      <div className="actionbuttons">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
        <button className="paid">Mark as Paid</button>
      </div>

      <div className="detailscard">
        <h2>#{id}</h2>
        <p className="title">Graphic Design</p>

        <div className="addressbox">
          <p>19 Union Terrace</p>
          <p>London</p>
          <p>United Kingdom</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
