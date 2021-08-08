import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>August 8th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$254.44</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
