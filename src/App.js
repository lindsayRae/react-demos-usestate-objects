import './App.css';
import { useState } from 'react';

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: '', by: '' });

  function changeHandler(e) {
    console.log(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // spread operator makes a copy, keeping state immutable
    // using brackets allows me to set the value of the E target named dynamically
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: '', by: '' });
  }

  return (
    <>
      <h1>My Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          name='goal'
          placeholder='Goal'
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type='text'
          name='by'
          placeholder='By...'
          value={formData.by}
          onChange={changeHandler}
        />
        <button>Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div className='App'>
      <GoalForm onAdd={addGoal}></GoalForm>
      <ListOfGoals allGoals={allGoals}></ListOfGoals>
    </div>
  );
}
