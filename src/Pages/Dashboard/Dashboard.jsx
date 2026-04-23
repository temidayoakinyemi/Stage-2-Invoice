import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import InvoiceCard from "../../Components/InvoiceCard/InvoiceCard";
import { getInvoices, saveInvoices } from "../../utils/storage";
import "./Dashboard.css";

const Dashboard = ({ darkMode, toggleTheme }) => {
  const [invoices, setInvoices] = useState([]);
  const [filter, setFilter] = useState("All");

  const [deleteId, setDeleteId] = useState(null);

  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({
    client: "",
    amount: "",
    status: "Pending",
  });

  // LOAD DATA
  useEffect(() => {
    const stored = getInvoices();
    setInvoices(stored);
  }, []);

  // SAVE DATA
  useEffect(() => {
    saveInvoices(invoices);
  }, [invoices]);

  // CREATE INVOICE
  const createInvoice = () => {
    const newInvoice = {
      id: "RT" + Math.floor(Math.random() * 9999),
      date: new Date().toDateString(),
      client: "New Client",
      amount: "500.00",
      status: "Pending",
    };

    setInvoices([newInvoice, ...invoices]);
  };

  // DELETE FLOW
  const confirmDelete = (id) => {
    setDeleteId(id);
  };

  const handleDelete = () => {
    const updated = invoices.filter((inv) => inv.id !== deleteId);
    setInvoices(updated);
    setDeleteId(null);
  };

  // EDIT FLOW
  const startEdit = (item) => {
    setEditItem(item.id);
    setFormData(item);
  };

  const saveEdit = () => {
    const updated = invoices.map((inv) =>
      inv.id === editItem ? { ...formData, id: editItem } : inv,
    );

    setInvoices(updated);
    setEditItem(null);
  };

  // STATUS UPDATE
  const updateStatus = (id, status) => {
    const updated = invoices.map((inv) =>
      inv.id === id ? { ...inv, status } : inv,
    );
    setInvoices(updated);
  };

  // FILTER
  const filtered =
    filter === "All"
      ? invoices
      : invoices.filter((inv) => inv.status === filter);

  return (
    <>
      <Sidebar darkMode={darkMode} toggleTheme={toggleTheme} />

      <div className="dashboard">
        <div className="dashboardcontainer">
          {/* TOP BAR */}
          <div className="dashboardtop">
            <div>
              <h1>Invoices</h1>
              <p>{filtered.length} invoices</p>
            </div>

            <div className="topactions">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="filterselect"
              >
                <option value="All">All</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Draft">Draft</option>
              </select>

              <button className="newbtn" onClick={createInvoice}>
                + New Invoice
              </button>
            </div>
          </div>

          {/* CARDS OR EMPTY STATE */}
          <div className="dashboardcards">
            {filtered.length === 0 ? (
              <div className="emptystate">
                <h1>There is nothing here</h1>
                <p>
                  Create an invoice by clicking the{" "}
                  <strong>"New Invoice"</strong> button.{" "}
                  <strong>Get started</strong>
                </p>
              </div>
            ) : (
              filtered.map((item) => (
                <InvoiceCard
                  key={item.id}
                  item={item}
                  onDelete={confirmDelete}
                  onUpdate={updateStatus}
                  onEdit={startEdit}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* DELETE MODAL */}
      {deleteId && (
        <div className="modaloverlay">
          <div className="modalbox">
            <h2>Confirm Deletion</h2>
            <p>This action cannot be undone.</p>

            <div className="modalactions">
              <button className="cancelbtn" onClick={() => setDeleteId(null)}>
                Cancel
              </button>

              <button className="confirmbtn" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {editItem && (
        <div className="modaloverlay">
          <div className="modalbox">
            <h2>Edit Invoice</h2>

            <input
              placeholder="Client"
              value={formData.client}
              onChange={(e) =>
                setFormData({ ...formData, client: e.target.value })
              }
            />

            <input
              placeholder="Amount"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />

            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            >
              <option>Paid</option>
              <option>Pending</option>
              <option>Draft</option>
            </select>

            <div className="modalactions">
              <button className="cancelbtn" onClick={() => setEditItem(null)}>
                Cancel
              </button>

              <button className="confirmbtn" onClick={saveEdit}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
