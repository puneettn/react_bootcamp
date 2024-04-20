import logo from "./logo.svg";
import "./App.css";
import Name from "./Name";

function App() {
  return (
    <div className="App">
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-light">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>
      <Name />
    </div>
  );
}

export default App;
