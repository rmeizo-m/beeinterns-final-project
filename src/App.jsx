import React from 'react';

import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { PostsList } from './app/features/posts/PostsList';
import { AddPostForm } from './app/features/posts/AddPostForm';

import { Header, Grid } from './components';
import {
  MainPage,
  NewsPage,
  Members,
  Teachers,
  Login,
  NotFound
} from './pages';


function withGrid(wrappedComponent) {
  return () => (<Grid>
    {React.createElement(wrappedComponent)}
  </Grid>);
}

function App() {
  const location = useLocation();

  return (
    <div>

      {(location.pathname !== '/login' && location.pathname !=='/notfound')  && <Header />}

      <Switch>
          <Route exact path="/" component={withGrid(MainPage)} />
          <Route path="/news" component={withGrid(NewsPage)} />
          <Route path="/news2" component={withGrid(() => (<React.Fragment>
            <AddPostForm />
          <PostsList /></React.Fragment>))} />
          <Route path="/members" component={withGrid(Members)} />
          <Route path="/teachers" component={withGrid(Teachers)} />
          <Route path="/login" component={withGrid(Login)} />
          <Route path="/notfound" component={() => (<NotFound />)} />
          {/* Redirect all other routes to 404 handler */}
          <Redirect to='/notfound' />
      </Switch>

    </div>
  );
}

export default App;
