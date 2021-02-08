import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navb from "./components/layout/Navb";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Navb />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </section>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
