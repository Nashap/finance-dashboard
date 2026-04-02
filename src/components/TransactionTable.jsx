import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import AddTransaction from "./AddAddTransaction";

export default function TransactionTable() {
  const [show, setShow] = useState(false);
  const { transactions, deleteTransaction } = useContext(AppContext);

  return (
    <div className="table-box">

      {/* Add Button */}
      <button onClick={() => setShow(true)}>+ Add</button>

      {/* Modal */}
      {show && <AddTransaction close={() => setShow(false)} />}

      {/* Empty State */}
      {transactions.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>₹ {t.amount}</td>
                <td>{t.category}</td>
                <td className={t.type}>{t.type}</td>
                <td>
                  <button onClick={() => deleteTransaction(t.id)}>
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}