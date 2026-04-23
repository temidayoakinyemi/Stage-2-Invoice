import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard/Dashboard";
import InvoiceDetail from "./Pages/InvoiceDetails/InvoiceDetail";
import NewInvoice from "./Pages/NewInvoice/NewInvoice";
import EditInvoice from "./Pages/EditInvoice/EditInvoice";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard darkMode={darkMode} toggleTheme={toggleTheme} />}
        />

        <Route path="/invoice/:id" element={<InvoiceDetail />} />
        <Route path="/new" element={<NewInvoice />} />
        <Route path="/edit/:id" element={<EditInvoice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
