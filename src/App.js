import './App.css';
import { useState } from 'react';

// Example #1
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
      <h1>Example #1</h1>
      <h2>My Goals</h2>
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

// Example #1
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

// Example #2
function GiftCard() {
  const [giftCard, setGiftCard] = useState({
    firstName: 'Jennifer',
    lastName: 'Smith',
    text: 'Free dinner for 4 guests',
    valid: true,
    instructions: 'To use your coupon, click the button below.',
  });

  function spendGiftCard() {
    setGiftCard((prevState) => {
      return {
        ...prevState,
        text: 'Your coupon has been used.',
        valid: false,
        instructions: ' Please visit our restaurant to renew your gift card.',
      };
    });
  }
  return (
    <div>
      <h1>Example #2</h1>
      <h2>Gift Card</h2>
      <p>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </p>
      <p>{giftCard.text}</p>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
}
export default function App() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div className='App'>
      <div>
        <GoalForm onAdd={addGoal}></GoalForm>
        <ListOfGoals allGoals={allGoals}></ListOfGoals>
      </div>

      <GiftCard></GiftCard>
    </div>
  );
}
