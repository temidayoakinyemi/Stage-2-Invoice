import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getInvoices } from "../../utils/storage";
import "./InvoiceDetail.css";

const InvoiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const data = getInvoices();
    const found = data.find((inv) => inv.id === id);
    setInvoice(found);
  }, [id]);

  if (!invoice) {
    return <h2 style={{ padding: "40px" }}>Invoice not found</h2>;
  }

  return (
    <div className="detailpage">
      <button onClick={() => navigate(-1)}>Go Back</button>

      <div className="detailcard">
        <h2>Invoice #{invoice.id}</h2>

        <p>
          <strong>Client:</strong> {invoice.client}
        </p>
        <p>
          <strong>Date:</strong> {invoice.date}
        </p>
        <p>
          <strong>Amount:</strong> £{invoice.amount}
        </p>
        <p>
          <strong>Status:</strong> {invoice.status}
        </p>

        <button onClick={() => navigate(`/edit/${invoice.id}`)}>
          Edit Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoiceDetail;
