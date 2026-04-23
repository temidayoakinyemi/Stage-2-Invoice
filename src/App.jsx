import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import InvoiceDetails from "./Components/InvoiceDetails/InvoiceDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/invoice/:id" element={<InvoiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
