import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Admin from "./views/Admin";
import Home from "./views/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={'/admin'} component={Admin}/>
          <Route exact path={'/'} component={Home}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
