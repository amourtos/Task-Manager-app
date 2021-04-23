import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./views/main";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./views/notFound";
import Registration from "./components/registration/registration";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/registration" component={Registration} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
