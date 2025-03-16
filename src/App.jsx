import React, { useState } from "react"
import Header from "./components/Header"
import AddExpense from "./pages/AddExpense"

function App() {

  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    console.log("Yeni Gider:", expense)
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <AddExpense onAddExpense={handleAddExpense} />
    </div>
  )
}

export default App
