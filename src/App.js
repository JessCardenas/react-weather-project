import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/JessCardenas" target="blank">
            Jessica Cárdenas
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/JessCardenas/react-weather-project"
            target="blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
