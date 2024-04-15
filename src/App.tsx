import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <h1>Hooks-demo</h1>
      <Counter initialValue={0} maxValue={5} minValue={-5} stepValue={3} />
    </div>
  );
}

export default App;
