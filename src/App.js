import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Main from "./views/Main";
import TodoList from "../src/todoList/todoList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
