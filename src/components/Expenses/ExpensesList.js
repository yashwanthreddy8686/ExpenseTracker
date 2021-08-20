import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = (props) => {
  if(props.items.length === 0){
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  }
  return <ul>
      {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
      ))}
  </ul> 
}

export default ExpensesList;
