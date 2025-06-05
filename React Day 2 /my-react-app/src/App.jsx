import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import NewExpense from "./Components/NewExpense/NewExpense.jsx";

const DUMMY_EXPENSE = [
    {
      id: "e1",
      title: "TV",
      amount: 100.65,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Groceries",
      amount: 45.3,
      date: new Date(2020, 8, 2),
    },
    {
      id: "e3",
      title: "Laptop",
      amount: 850.99,
      date: new Date(2020, 5, 21),
    },
    {
      id: "e4",
      title: "Electricity Bill",
      amount: 60.0,
      date: new Date(2020, 9, 10),
    },
  ];
function App() {
   const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

  const addExpenseHandler = (expense) => {
    // console.log("in App.jsx")
    // console.log(expense)

    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
       <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */}

      {/* <ExpenseItem expenses = {expenses[0]}></ExpenseItem>
      <ExpenseItem expenses = {expenses[1]}></ExpenseItem>
      <ExpenseItem expenses = {expenses[2]}></ExpenseItem>
      <ExpenseItem expenses = {expenses[3]}></ExpenseItem> */}

      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
