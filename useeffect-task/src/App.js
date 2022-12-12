import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./components/clickCounter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClickCounter />
        <div className="info-container">
          <h1>React 101 basics Task</h1>
          <ul>
            <li>Required content:</li>
            <li>create a react app</li>
            <li>use a component utilizing useState for storing some state</li>
            <li>Use that state in some way</li>
            <li>Change the state in some way.</li>
          </ul>
        </div>

        {/* <p>Task:</p>
        <p>
          Showcase a React application utilizing the useState hook. Use that
          state and have some way for changing that state.
        </p> */}
      </header>
    </div>
  );
}

export default App;
