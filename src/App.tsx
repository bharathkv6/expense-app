// import React from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import ExpenseList from "./components/Expenses/ExpenseList/ExpenseList";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import Chart from "./components/Expenses/Chart/Chart";
import { ExpenseItem } from "./Types/types";

function App() {
  const initialExpenses: ExpenseItem[] = useMemo(
    () => [
      {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
      } as ExpenseItem,
      {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
      } as ExpenseItem,
      {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
      } as ExpenseItem,
      {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
      } as ExpenseItem,
    ],
    []
  );

  const [filterYear, setFilterYear] = useState<number>(
    new Date().getFullYear()
  );

  const expenseFilter = useCallback(
    (expenses: ExpenseItem[]) => {
      return expenses.filter(
        (expense) => expense.date.getFullYear() === filterYear
      );
    },
    [filterYear]
  );

  const [expenses, setExpense] = useState<ExpenseItem[]>(
    expenseFilter(initialExpenses)
  );

  const submitHandler = (expense: ExpenseItem) => {
    setExpense((prevState) => [...prevState, expense]);
  };

  const filterExpenses = (year: number) => {
    setFilterYear(year);
  };

  useEffect(() => {
    setExpense(expenseFilter(initialExpenses));
  }, [initialExpenses, filterYear, expenseFilter]);

  /* // JSX will be converted to following code
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Lets get started"),
    React.createElement(ExpenseList, { expenses })
  ); 
  */

  return (
    <div>
      <NewExpense submitHandler={submitHandler} />
      <ExpenseList
        expenses={expenses}
        filterExpenses={filterExpenses}
        selectedYear={filterYear}
      />
    </div>
  );
}

export default App;
