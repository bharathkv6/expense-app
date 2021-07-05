import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { ExpenseListProps } from "../../../Types/types";
import "./ExpenseList.css";
import ExpenseChart from "../ExpenseChat/ExpenseChart";

const ExpenseList: React.FC<ExpenseListProps> = (props) => {
  const { expenses, selectedYear } = props;

  const filterExpenses = (year: number) => props.filterExpenses(year);

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterExpenses={filterExpenses}
        selectedYear={selectedYear}
      />
      <ExpenseChart expenses={expenses} />
      {expenses.length > 0 && (
        <ul className="expenses-list">
          {expenses.map((expense) => (
            <li key={expense.id}>
              <ExpenseItem
                id={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
              />
            </li>
          ))}
        </ul>
      )}
      {expenses.length === 0 && (
        <h2 className="expenses-list__fallback">No Expense Found</h2>
      )}
    </Card>
  );
};

export default ExpenseList;
