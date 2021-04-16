import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Main from "./views/Main";
import CreateTodo from "./createTodo/createTodo";
import { useState } from "react";
import { useStore } from "./store/store";

function App() {
  const [apiResponse, setApiResponse] = useState();
  const user = useStore((state) => state.user);
  console.log(user);
  function callAPI() {
    fetch("http://localhost:3001/testAPI")
      .then((res) => res.text())
      .then((res) => setApiResponse({ apiResponse: res }));
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/main" component={CreateTodo} />
      </Switch>
      <p className="App-intro">{apiResponse}</p>
    </div>
  );
}

export default App;
