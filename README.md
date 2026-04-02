# Finance Dashboard

## Overview

This project is a Finance Dashboard UI built using React.
It allows users to track financial activity, view transactions, and understand spending patterns through a clean and interactive interface.

The focus of this project is on frontend design, state management, and user experience.

---

## Features

### Dashboard Overview

* Total Balance, Income, and Expense summary cards
* Visual charts:

  * Line chart (trend over time)
  * Pie chart (category breakdown)

### Transactions

* View all transactions
* Add new transactions using a modal
* Edit existing transactions
* Delete transactions
* Search and filter functionality

### Role-Based UI

* Viewer: Can only view data
* Admin: Can add, edit, and delete transactions
* Role switching using a dropdown

### Insights

* Displays useful financial insights such as:

  * Highest spending category
  * Total expense summary

### Dark Mode

* Toggle between Light and Dark theme

### Data Persistence

* Transactions are stored using localStorage

---

## Tech Stack

* React (Vite)
* JavaScript (ES6+)
* CSS (Custom styling)
* Recharts (for charts)

---

## Project Structure

```
src/
 ├── components/
 │    ├── AddTransaction.jsx
 │    ├── Charts.jsx
 │    ├── Insights.jsx
 │    ├── RoleSwitcher.jsx
 │    ├── Sidebar.jsx
 │    ├── SummaryCard.jsx
 │    └── TransactionTable.jsx
 │
 ├── context/
 │    └── AppContext.jsx
 │
 ├── pages/
 │    └── Dashboard.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## Setup Instructions

1. Clone the repository

```bash
git clone <your-repo-link>
cd finance-dashboard
```

2. Install dependencies

```bash
npm install
```

3. Run the project

```bash
npm run dev
```

---

## Key Highlights

* Clean and responsive UI design
* Proper state management using Context API
* Modular component structure
* Handles empty states gracefully
* Interactive user experience

---

## Assumptions

* Uses mock data (no backend integration)
* Focus is on frontend functionality and UI

---

## Conclusion

This project demonstrates frontend development skills, UI/UX design, state management, and component-based architecture.

---

## Author

Nasha P
