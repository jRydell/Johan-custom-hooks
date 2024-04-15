import "./App.css";
import { useCounter } from "./hooks/useCounter";

function App() {
  const [x, incrementX] = useCounter();

  return (
    <>
      <div>
        <h1>Hooks-Demo</h1>
        <button onClick={incrementX}>Increment X</button>
        <p>{x}</p>
      </div>
    </>
  );
}

export default App;
