import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';
import RegistroPage from './components/Pages/RegistroPage';
import AdminPage from './components/Pages/AdminPage';

import AlertasState from './context/alertas/alertasState'

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AlertasState>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/registro" component={RegistroPage} />
            <Route exact path="/dashboard" component={AdminPage} />
          </Switch>
        </Router>
      </AlertasState>
    </ThemeProvider>
  );
}

export default App;
