export default function SummaryCard({ type }) {
  const data = {
    balance: 3000,
    income: 5000,
    expense: 2000,
  };

  return (
    <div className="card">
      <h3>{type}</h3>
      <p>₹ {data[type]}</p>
    </div>
  );
}