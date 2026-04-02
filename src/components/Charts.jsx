import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie } from "recharts";

export default function Charts() {
  const { transactions } = useContext(AppContext);

  const expenseData = transactions.filter(t => t.type === "expense");

  return (
    <>
      <div className="chart-box">
        <LineChart width={300} height={200} data={transactions}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line dataKey="amount" />
        </LineChart>
      </div>

      <div className="chart-box">
        <PieChart width={300} height={200}>
          <Pie data={expenseData} dataKey="amount" nameKey="category" />
        </PieChart>
      </div>
    </>
  );
}