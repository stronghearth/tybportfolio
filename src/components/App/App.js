import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../../routes/LandingPage/LandingPage';
import AboutPage from '../../routes/AboutPage/AboutPage';
import ProjectsPage from '../../routes/ProjectsPage/ProjectsPage';
import ContactPage from '../../routes/ContactPage/ContactPage';
import NotFound from '../../routes/NotFound/NotFound';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route
            exact
            path={'/'}
            component={LandingPage}
          />
          <Route
            exact
            path={'/about'}
            component={AboutPage}
          />
          <Route
            exact
            path={'/projects'}
            component={ProjectsPage}
          />
          <Route
            exact
            path={'/contact'}
            component={ContactPage}
          />
          <Route
            component={NotFound}
          />
      </Switch>
    </div>
  );
}

export default App;