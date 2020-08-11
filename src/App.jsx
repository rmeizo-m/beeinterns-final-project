import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { PostsList } from './app/features/posts/PostsList'

import { Header, Grid } from './components';
import {
  MainPage,
  NewsPage,
  NewsPage2,
  Members,
  Teachers,
  Login,
} from './pages';


function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login' && <Header />}
      <Grid>
        <Switch>
          <Route exact path="/" component={() => (<MainPage />)} />
          <Route path="/news" component={() => (<NewsPage />)} />
          {/* <Route path="/news2" component={() => (<NewsPage2 />)} /> */}
          <Route path="/news2" component={() => (<PostsList />)} />
          <Route path="/members" component={() => (<Members />)} />
          <Route path="/teachers" component={() => (<Teachers />)} />
          <Route path="/login" component={() => (<Login />)} />
        </Switch>
      </Grid>
    </div>
  );
}

export default App;
