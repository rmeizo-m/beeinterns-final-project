import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Header, Grid} from './components';
import {MainPage, NewsPage, Members, Teachers, Profile} from './viwe';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Grid>
        <Router>
          <Switch>
            <Route exact path="/" component={()=>(<MainPage />)} />
            <Route path="/news" component={()=>(<NewsPage />)} />
            <Route path="/members" component={()=>(<Members />)} />
            <Route path="/teachers" component={()=>(<Teachers />)} />
            <Route path="/profile" component={()=>(<Profile />)} />
          </Switch>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
