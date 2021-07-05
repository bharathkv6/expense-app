export interface ExpenseItem {
  id: string;
  date: Date;
  title: string;
  amount: number;
}

interface DataPoint {
  label: string;
  value: number;
}

export interface ChartProps {
  dataPoints: DataPoint[];
}

export interface ChartBarProps {
  label: string;
  value: number;
  maxValue: number | undefined;
}

export interface ExpenseChartProps {
  expenses: ExpenseItem[];
}

export interface ExpenseDateProps {
  date: Date;
}

export interface NewExpenseData {
  id: string;
  title: string;
  amount: string | number;
  date: string | Date;
};

export interface ExpenseFormProps {
  submitHandler: (expense: ExpenseItem) => void;
  showNewExpenseForm: () => void;
}

export interface ExpenseListProps {
  expenses: ExpenseItem[];
  selectedYear: number;
  filterExpenses: (year: number) => void;
}

export interface ExpensesFilterProps {
  selectedYear: number;
  filterExpenses: (year: number) => void;
}

export interface NewExpenseProps {
  submitHandler: (expense: ExpenseItem) => void;
}