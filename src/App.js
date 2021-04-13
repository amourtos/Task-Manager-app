import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./views/home";
import createTodo from "./createTodo/createTodo";

function App() {
  // return <div className="App">I'm changing this to say hi</div>;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/main" component={createTodo} />
      </Switch>
    </div>
  );
}

export default App;
