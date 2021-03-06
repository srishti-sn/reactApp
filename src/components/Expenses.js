import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setYearFilter] = useState("2020");
  const onExpenseFilter = (selectedYearFilter) => {
    setYearFilter(selectedYearFilter);
    
  };
const filteredExpenses=props.expenseList.filter((expense)=>{return expense.date.getFullYear().toString()===selectedYear} );


  return (
    <div>
      <ExpensesFilter
        selected={selectedYear}
        onSelectFilter={onExpenseFilter}
      ></ExpensesFilter>
      <ExpensesChart filteredExpenses={filteredExpenses}></ExpensesChart>
      <Card className="expenses">
        <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
