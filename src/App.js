import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Main from "./views/Main";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
