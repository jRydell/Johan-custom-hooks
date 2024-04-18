import "./App.css";
import Counter from "./components/Counter/Counter";
import DarkModeToggle from "./components/DarkmodeToggle/DarkModeToggle";
import DataDisplayComponent from "./components/DataDisplayComponent/DataDisplayComponent";

function App() {
  return (
    <div className="App">
      <h1>Hooks-demo</h1>
      <section className="darkmode-wrap">
        <DarkModeToggle title={"Darkmode"} />
      </section>
      <h2>useCounter</h2>
      <Counter
        initialValue={0}
        countValue={1}
        maxValue={5}
        minValue={-5}
        stepValue={2}
      />
      <Counter
        initialValue={3}
        countValue={1}
        maxValue={10}
        minValue={-10}
        stepValue={3}
      />

      <h2>useFetch</h2>
      <DataDisplayComponent url={"https://swapi.py4e.com/api/people/4/"} />
      <DataDisplayComponent url={"https://swapi.py4e.com/api/people/3/"} />
      <DataDisplayComponent url={"https://swapi.py4e.com/api/people/1/"} />
    </div>
  );
}

export default App;
