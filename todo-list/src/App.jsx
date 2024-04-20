import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";

function App() {
  return (
    <center className="todo-content">
      <AppName />
      <AddTodo />
      <div className="container text-center">
        <div className="row">
          <div className="col-6">Buy Milk</div>
          <div className="col-4">4/10/2023</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger pk-button">
              Delete
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-6">Go to collage</div>
          <div className="col-4">5/10/2023</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger pk-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
