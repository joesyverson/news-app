import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ArticleContainer from './ArticleContainer.js';
import Profile from './Profile.js';

class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route
          path="/profile"
          render={(routerProps) => <Profile {...routerProps}/>}/>
        <Route
          path="/"
          render={(routerProps) => <ArticleContainer {...routerProps}/>}/>
      </Switch>
    );
  }

}

export default App;
