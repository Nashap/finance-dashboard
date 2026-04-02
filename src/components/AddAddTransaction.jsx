import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function AddTransaction({ close, editData }) {
  const { addTransaction, editTransaction } = useContext(AppContext);

  const [form, setForm] = useState(
    editData || {
      date: "",
      amount: "",
      category: "",
      type: "expense",
    }
  );

  const handleSubmit = () => {
    if (!form.date || !form.amount || !form.category) {
      alert("Please fill all fields");
      return;
    }

    if (editData) {
      // ✏️ EDIT MODE
      editTransaction({
        ...form,
        amount: Number(form.amount),
      });
    } else {
      // ➕ ADD MODE
      addTransaction({
        ...form,
        amount: Number(form.amount),
      });
    }

    close();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{editData ? "Edit Transaction" : "Add Transaction"}</h3>

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <button onClick={handleSubmit}>
            {editData ? "Update" : "Add"}
          </button>
          <button onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  );
}