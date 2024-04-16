import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <h1>Hooks-demo</h1>
      <Counter
        initialValue={0}
        countValue={1}
        maxValue={5}
        minValue={-5}
        stepValue={3}
      />
      <Counter
        initialValue={3}
        countValue={1}
        maxValue={10}
        minValue={-10}
        stepValue={6}
      />
      <Counter
        initialValue={6}
        countValue={1}
        maxValue={15}
        minValue={-15}
        stepValue={9}
      />
    </div>
  );
}

export default App;
