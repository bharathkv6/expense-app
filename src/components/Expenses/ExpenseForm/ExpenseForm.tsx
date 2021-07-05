import { useState } from "react";
import { NewExpenseData, ExpenseFormProps } from "../../../Types/types";
import { formatDate } from "../../../utils/utils";
import { ExpenseItem } from "../../../Types/types";
import { v4 as uuid_v4 } from "uuid";
import "./ExpenseForm.css";

const ExpenseForm: React.FC<ExpenseFormProps> = (props) => {
  const initialValues: NewExpenseData = {
    id: uuid_v4(),
    title: "",
    amount: "",
    date: "",
  };
  const [values, setValues] = useState<NewExpenseData>(initialValues);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const expense = values;
    setValues(initialValues);
    props.submitHandler(expense as ExpenseItem);
  };

  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    switch (id) {
      case "title":
        setValues((prevState) => ({
          ...prevState,
          [id]: value,
        }));
        break;

      case "amount":
        setValues((prevState) => ({
          ...prevState,
          [id]: Number(value),
        }));
        break;

      case "date":
        setValues((prevState) => ({
          ...prevState,
          [id]: new Date(value),
        }));
        break;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={values.title}
            onChange={onInputChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="1"
            value={values.amount}
            onChange={onInputChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            max={"2021-07-01"}
            value={values.date ? formatDate(values.date as Date) : values.date}
            onChange={onInputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.showNewExpenseForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
