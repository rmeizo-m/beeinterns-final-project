import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { Header, Grid } from './components';
import {
  MainPage,
  NewsPage,
  Members,
  Teachers,
  Login,
} from './pages';

import './App.css';

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname != '/login' && <Header />}
      <Grid>
        <Switch>
          <Route exact path="/" component={() => (<MainPage />)} />
          <Route path="/news" component={() => (<NewsPage />)} />
          <Route path="/members" component={() => (<Members />)} />
          <Route path="/teachers" component={() => (<Teachers />)} />
          <Route path="/login" component={() => (<Login />)} />
        </Switch>
      </Grid>
    </div>
  );
}

export default App;
