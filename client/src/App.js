import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navb from "./components/layout/Navb";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navb />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </section>
      </div>
    </Router>
  );
};

export default App;
