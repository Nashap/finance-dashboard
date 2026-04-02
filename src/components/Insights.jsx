import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((a,b) => a + b.amount, 0);

  return (
    <div className="card">
      <h3>Insights</h3>
      <p>Total Expense: ₹ {totalExpense}</p>
    </div>
  );
}