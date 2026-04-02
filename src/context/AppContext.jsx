import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  // Initial Data
  const initialData = [
    { id: 1, date: "2026-03-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2026-03-02", amount: 1200, category: "Food", type: "expense" },
    { id: 3, date: "2026-03-05", amount: 800, category: "Transport", type: "expense" },
  ];

  // Load from localStorage or use initial
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : initialData;
  });

  // Role (Viewer/Admin)
  const [role, setRole] = useState("viewer");

  // Filters
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // ➕ Add Transaction
  const addTransaction = (newTx) => {
    const updated = [
      ...transactions,
      { ...newTx, id: Date.now() }
    ];
    setTransactions(updated);
  };

  // ❌ Delete Transaction (extra feature 🔥)
  const deleteTransaction = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  // ✏️ Edit Transaction (optional advanced)
  const editTransaction = (updatedTx) => {
    const updated = transactions.map((t) =>
      t.id === updatedTx.id ? updatedTx : t
    );
    setTransactions(updated);
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
        filter,
        setFilter,
        search,
        setSearch,
        addTransaction,
        deleteTransaction,
        editTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};