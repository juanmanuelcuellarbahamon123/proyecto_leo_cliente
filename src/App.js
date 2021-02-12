import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 
import Login from './components/auth/Login';

import AlertasState from './context/alertas/alertasState'

const App = () => {
  return (
    <AlertasState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </AlertasState>
  );
}

export default App;
