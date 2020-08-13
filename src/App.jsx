import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { PostsList } from './app/features/posts/PostsList';
import { AddPostForm } from './app/features/posts/AddPostForm';

import { Header, Grid } from './components';
import {
  MainPage,
  NewsPage,
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
          <Route path="/news2" component={() => (<React.Fragment>
            <AddPostForm />
          <PostsList /></React.Fragment>)} />
          <Route path="/members" component={() => (<Members />)} />
          <Route path="/teachers" component={() => (<Teachers />)} />
          <Route path="/login" component={() => (<Login />)} />
        </Switch>
      </Grid>
    </div>
  );
}

export default App;
