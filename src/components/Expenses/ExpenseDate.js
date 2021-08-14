import './ExpenseDate.css';

function ExponentDate(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const date = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{date}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
}

export default ExponentDate;
