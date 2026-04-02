import { useState } from "react";

import SummaryCard from "../SummaryCard";
import TransactionTable from "../TransactionTable";
import RoleSwitcher from "../RoleSwitcher";
import Charts from "../Charts";
import Insights from "../Insights";
import Sidebar from "../Sidebar";

export default function Dashboard() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main">

        {/* ✅ SINGLE HEADER */}
        <div className="header">
          <h1>Dashboard</h1>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <RoleSwitcher />

            <button
              className="toggle-btn"
              onClick={() => setDark(!dark)}
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="cards">
          <SummaryCard type="balance" />
          <SummaryCard type="income" />
          <SummaryCard type="expense" />
        </div>

        {/* Charts */}
        <div className="charts">
          <Charts />
        </div>

        {/* Insights */}
        <Insights />

        {/* Table */}
        <TransactionTable />
      </div>
    </div>
  );
}