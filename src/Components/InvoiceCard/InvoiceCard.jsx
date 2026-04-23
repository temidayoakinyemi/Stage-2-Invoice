import React from "react";
import { useNavigate } from "react-router-dom";
import "./InvoiceCard.css";

const InvoiceCard = ({ item, onDelete, onUpdate, onEdit }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/invoice/${item.id}`);
  };

  return (
    <div className="invoicecard" onClick={goToDetail}>
      <h3 className="invoiceid">
        <span>#</span>
        {item.id}
      </h3>

      <p className="invoicedate">{item.date}</p>

      <p className="invoicename">{item.client}</p>

      <h2 className="invoiceamount">£{item.amount}</h2>

      {/* STATUS */}
      <select
        className="statusbtn"
        value={item.status}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => onUpdate(item.id, e.target.value)}
      >
        <option>Paid</option>
        <option>Pending</option>
        <option>Draft</option>
      </select>

      {/* EDIT */}
      <button
        className="editbtn"
        onClick={(e) => {
          e.stopPropagation();
          onEdit(item);
        }}
      >
        Edit
      </button>

      {/* DELETE */}
      <button
        className="deletebtn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(item.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default InvoiceCard;
