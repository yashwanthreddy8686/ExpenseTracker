import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import './NewExpense.css'

const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpense) => {
        const expenseItem = {
            ...enteredExpense,
            id: Math.random().toString()
        }
        props.onAddExpenseData(expenseItem);
        setdisplayForm(false);
    }

    const [displayForm, setdisplayForm] = useState(false);

    const startEditingHandler = () => {
        setdisplayForm(true);
    }

    const stopEditingHandler = () => {
        setdisplayForm(false);
    }
    return (
        <div className="new-expense">
            {!displayForm && <button onClick={startEditingHandler}>Add Expense</button>}
            {displayForm && <ExpenseForm onStopEditing={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
};

export default NewExpense;