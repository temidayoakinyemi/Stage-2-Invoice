const STORAGE_KEY = "invoices";

export const getInvoices = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveInvoices = (invoices) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
};
