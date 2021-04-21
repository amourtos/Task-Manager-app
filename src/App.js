import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./views/NotFound"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path = "*" component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
