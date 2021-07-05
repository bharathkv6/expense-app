import { ExpensesFilterProps } from "../../../Types/types";
import "./ExpensesFilter.css";

const ExpensesFilter: React.FC<ExpensesFilterProps> = (props) => {
  const { selectedYear } = props;
  const initialYear = new Date().getFullYear();

  const filterExpenses = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    props.filterExpenses(parseInt(year));
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterExpenses} value={selectedYear}>
          {new Array(5).fill(1).map((_, index) => (
            <option key={index} value={initialYear - index}>
              {initialYear - index}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
