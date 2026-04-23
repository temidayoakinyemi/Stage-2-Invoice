import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getInvoices, saveInvoices } from "../../utils/storage";

const EditInvoice = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    client: "",
    amount: "",
    status: "",
  });

  useEffect(() => {
    const data = getInvoices();
    const found = data.find((inv) => inv.id === id);
    if (found) setForm(found);
  }, [id]);

  const handleSave = () => {
    const data = getInvoices();

    const updated = data.map((inv) => (inv.id === id ? { ...form, id } : inv));

    saveInvoices(updated);
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }} className="editinvoice">
      <h2>Edit Invoice</h2>

      <input
        value={form.client}
        onChange={(e) => setForm({ ...form, client: e.target.value })}
      />

      <input
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option>Paid</option>
        <option>Pending</option>
        <option>Draft</option>
      </select>

      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default EditInvoice;
