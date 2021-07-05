import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { ExpenseItem, NewExpenseProps } from "../../../Types/types";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense: React.FC<NewExpenseProps> = (props) => {
  const [expenseFormVisibility, setExpenseFormVisibility] =
    useState<boolean>(false);

  const submitHandler = (expense: ExpenseItem) => {
    showNewExpenseForm();
    props.submitHandler(expense);
  };

  const showNewExpenseForm = () => {
    setExpenseFormVisibility((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {!expenseFormVisibility && (
        <button onClick={showNewExpenseForm}>Add New Expense</button>
      )}
      {expenseFormVisibility && (
        <ExpenseForm
          submitHandler={submitHandler}
          showNewExpenseForm={showNewExpenseForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
