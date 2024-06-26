import './style/main.scss';
import ExerciseComponent from './Customes/ExerciseComponent';
import NewExpense from './NouveauExpense/NewExpense';
import Header from './Header/Header';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler = (expense) => {
        console.log(expense);
  };
  return (
    <div className="App">
      <Header />
      <NewExpense onAddExpense={addExpenseHandler}/>
      <header className="App__wrapper">
        <ExerciseComponent
          date={expenses[0].date}
          title={expenses[0].title}
          amount={expenses[0].amount}
        ></ExerciseComponent>
        <ExerciseComponent
          date={expenses[1].date}
          title={expenses[1].title}
          amount={expenses[1].amount}
        ></ExerciseComponent>
        <ExerciseComponent
          date={expenses[2].date}
          title={expenses[2].title}
          amount={expenses[2].amount}
        ></ExerciseComponent>
        <ExerciseComponent
          date={expenses[3].date}
          title={expenses[3].title}
          amount={expenses[3].amount}
        ></ExerciseComponent>
      </header>
    </div>
  );
}

export default App;
