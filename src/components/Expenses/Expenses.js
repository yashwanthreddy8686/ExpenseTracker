import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import './ExpensesFilter'
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setfilterYear] = useState('2020');

  const filteredChangeHandler = (year) => {
    setfilterYear(year);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onSaveYearEntered={filteredChangeHandler}></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
