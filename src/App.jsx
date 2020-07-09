import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header, Grid } from './components';
import {
  MainPage,
  NewsPage,
  Members,
  Teachers,
  Profile,
} from './pages';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Grid>
        <Switch>
          <Route exact path="/" component={() => (<MainPage />)} />
          <Route path="/news" component={() => (<NewsPage />)} />
          <Route path="/members" component={() => (<Members />)} />
          <Route path="/teachers" component={() => (<Teachers />)} />
          <Route path="/profile" component={() => (<Profile />)} />
        </Switch>
      </Grid>
    </div>
  );
}

export default App;
