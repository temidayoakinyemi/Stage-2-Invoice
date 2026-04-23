import React from "react";
import "./InvoiceCard.css";
import righticon from "../../assets/righticon.png";
import { useNavigate } from "react-router-dom";

const InvoiceCard = () => {
  const navigate = useNavigate();

  const invoices = [
    {
      id: "RT3080",
      date: "Due 19 Aug 2021",
      name: "Jensen Huang",
      amount: "£1,800.90",
      status: "Paid",
      className: "paidstatus",
    },
    {
      id: "XM9141",
      date: "Due 20 Aug 2021",
      name: "Alex Grim",
      amount: "£556.00",
      status: "Pending",
      className: "pendingstatus",
    },
    {
      id: "RG0314",
      date: "Due 01 Sep 2021",
      name: "John Morrison",
      amount: "£14,004.84",
      status: "Pending",
      className: "pendingstatus",
    },
    {
      id: "RT2080",
      date: "Due 12 Sep 2021",
      name: "Chris Gray",
      amount: "£102.04",
      status: "Paid",
      className: "paidstatus",
    },
    {
      id: "AA1449",
      date: "Due 14 Sep 2021",
      name: "Tom Cruise",
      amount: "£4,300.00",
      status: "Pending",
      className: "pendingstatus",
    },
    {
      id: "TY9141",
      date: "Due 21 Sep 2021",
      name: "Emma Watson",
      amount: "£900.50",
      status: "Pending",
      className: "pendingstatus",
    },
    {
      id: "FV2353",
      date: "Due 01 Oct 2021",
      name: "Lewis Hamilton",
      amount: "£2,200.00",
      status: "Draft",
      className: "draftstatus",
    },
  ];

  return (
    <>
      {invoices.map((item, index) => (
        <div
          className="invoicecard container"
          key={index}
          onClick={() => navigate(`/invoice/${item.id}`)}
        >
          <h3 className="invoiceid">
            <span>#</span>
            {item.id}
          </h3>

          <p className="invoicedate">{item.date}</p>

          <p className="invoicename">{item.name}</p>

          <h2 className="invoiceamount">{item.amount}</h2>

          <button className={`statusbtn ${item.className}`}>
            <span className="statusdot"></span>
            {item.status}
          </button>

          <img src={righticon} alt="" />
        </div>
      ))}
    </>
  );
};

export default InvoiceCard;
