import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.jsx";
import "./Expenses.css";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter.jsx";
import ExpensesList from  "./ExpensesList.jsx"
import ExpenseChart from "./ExpenseChart.jsx";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  // let filterInfoText = "2019 , 2021 , 2022";
  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  //   if (selectedYear === "2019") filterInfoText = "2020 , 2021 , 2022";
  //   else if (selectedYear === "2021") filterInfoText = "2019, 2020, 2022";
  //   else filterInfoText = "2019, 2020, 2021";
  // };

  const [filterInfoText, setFilterInfoText] = useState("2019 , 2021 , 2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    if (selectedYear === "2019") {
      setFilterInfoText("2020 , 2021 , 2022");
    } else if (selectedYear === "2020") {
      setFilterInfoText("2019 , 2021 , 2022");
    } else if (selectedYear === "2021") {
      setFilterInfoText("2019 , 2020 , 2022");
    } else {
      setFilterInfoText("2019 , 2020 , 2021");
    }
  };

  const filteredExpenses = props.item.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteredYear
  });

    // let expenseContent = <p>No Expense Found</p>

    // if(filteredExpenses.length > 0){
    //   expenseContent = filteredExpenses.map((expense) => (
    //       <ExpenseItem
    //         key={expense.id}
    //         title={expense.title}
    //         amount={expense.amount}
    //         date={expense.date}
    //       />
    //     ))
      
    // }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <p>Data for years {filterInfoText} is hidden</p>

      {/* dynamically add items using map  */}
      {/* Approach 1 using ternary operator */}
      {/* {filteredExpenses === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

    {/* approach 2 using && */}
    {/* optional to ternary operator if first condition fails 2nd will be printed */}
      {/* {filteredExpenses == 0 && <p>No Expenses Found</p>}
      {filteredExpenses == 0 &&
        props.item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* approach 3 using conditional chk */}
      {/* {expenseContent} */}

      <ExpenseChart expenses = {filteredExpenses} />

      <ExpensesList items = {filteredExpenses}/>

      {/* <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;
