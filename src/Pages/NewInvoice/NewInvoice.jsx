import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getInvoices, saveInvoices } from "../../utils/storage";
import "./NewInvoice.css";

const NewInvoice = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const data = getInvoices();
    const found = data.find((inv) => inv.id === id);
    setInvoice(found);
  }, [id]);

  const handleDelete = () => {
    const data = getInvoices();
    const filtered = data.filter((inv) => inv.id !== id);
    saveInvoices(filtered);
    navigate("/");
  };

  const markAsPaid = () => {
    const data = getInvoices();

    const updated = data.map((inv) =>
      inv.id === id ? { ...inv, status: "paid" } : inv,
    );

    saveInvoices(updated);
    navigate("/");
  };

  if (!invoice) return <p>Loading...</p>;

  return (
    <div className="newinvoice">
      <p onClick={() => navigate(-1)}>← Go back</p>

      <h2>Status: {invoice.status}</h2>

      <button onClick={handleDelete}>Delete</button>
      <button onClick={markAsPaid}>Mark as Paid</button>

      <div>
        <h1>#{invoice.id}</h1>
        <p>{invoice.name}</p>
        <p>{invoice.address}</p>
      </div>
    </div>
  );
};

export default NewInvoice;
