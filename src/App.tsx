import "./App.css";
import Counter from "./components/Counter/Counter";
import DataDisplayComponent from "./components/DataDisplayComponent/DataDisplayComponent";
import ToggleButton from "./components/ToggleButton/ToggleButton";

function App() {
  return (
    <div className="App">
      <h1>Hooks-demo</h1>
      <h2>useCounter</h2>
      <Counter
        initialValue={0}
        countValue={1}
        maxValue={5}
        minValue={-5}
        stepValue={3}
      />
      <ToggleButton />
      <h2>useFetch</h2>
      <DataDisplayComponent url={"https://swapi.py4e.com/api/people/4/"} />
      <DataDisplayComponent url={"https://swapi.py4e.com/api/people/3/"} />
      <DataDisplayComponent url={"https://swapi.py4e.com/api/people/1/"} />
    </div>
  );
}

export default App;
