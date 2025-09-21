import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age":
      return { ...state, age: state.age + 1 };
    case "decremented_age":
      return { ...state, age: state.age - 1 };
    case "changed_name":
      return { ...state, name: action.nextName };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

const initialState = { name: "SUMIT", age: 19 };

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleIncrement() {
    dispatch({ type: "incremented_age" });
  }

  function handleDecrement() {
    dispatch({ type: "decremented_age" });
  }

  function handleNameChange(e) {
    dispatch({ type: "changed_name", nextName: e.target.value });
  }

  return (
    <div>
      <input value={state.name} onChange={handleNameChange} />
      <br />
      <br />
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </div>
  );
}
