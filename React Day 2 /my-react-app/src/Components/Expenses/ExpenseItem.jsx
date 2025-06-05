import React, { useState } from 'react';
import "./ExpenseItem.css";
import Card from "../UI/Card.jsx";
import ExpenseDate from "./ExpenseDate.jsx";

function ExpenseItem(props) {
  // destructuring an object
  // function ExpenseItem({date, title, amount}){
  // const expenseDate = new Date(2021,2,28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67

  // return <h2>ExpDateense item!</h2>

  //   return (
  //     <div className='expense-item'>
  //       <div>{props.date.toISOString()}</div>
  //       <div className='expense-item__description'>
  //         <h2>{props.title}</h2>
  //         <div className='expense-item__price'>${props.amount}</div>
  //       </div>
  //     </div>
  //   );

  // return (
  //     <div className='expense-item'>
  //         <div>{props.expenses.date.toISOString()}</div>
  //         <div className="expense-item__description">
  //             <h2>{props.expenses.title}</h2>
  //             <div className="expense-item__price">${props.expenses.amount}</div>
  //         </div>
  //     </div>
  // );

  // for destructuring
  //     return (
  //         <div className='expense-item'>
  //             <div>{date.toISOString()}</div>
  //             <div className="expense-item__description">
  //                 <h2>{title}</h2>
  //                 <div className="expense-item__price">${amount}</div>
  //             </div>
  //         </div>
  //     );

  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const year = props.date.getFullYear();
  //   return (
  //     <div className="expense-item">
  //       <div>
  //         <div>{month}</div>
  //         <div>{year}</div>
  //         <div>{day}</div>
  //       </div>
  //       <div className="expense-item__description">
  //         <h2>{props.title}</h2>
  //         <div className="expense-item__price">${props.amount}</div>
  //       </div>
  //     </div>
  //   );

  //     return (
  //     <div className="expense-item">
  //       <ExpenseDate date ={props.date} />
  //       <div className="expense-item__description">
  //         <h2>{props.title}</h2>
  //         <div className="expense-item__price">${props.amount}</div>
  //       </div>
  //     </div>
  //   );

      // function clickHandler(){
      //   console.log("Clicked!!!")
      // }

      const [title, setTittle] = useState(props.title)
      console.log("ExpenseItem evaluated by React...")

      const clickHandler = () =>{
        setTittle("Updated!")
        console.log(title);
      }

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={() => {console.log("Clicked!!")}}>Change Title</button> */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;
