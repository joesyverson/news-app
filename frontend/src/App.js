import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ArticleContainer from './ArticleContainer.js';
import Profile from './Profile.js';

class App extends React.Component {

  state = {
    extAPIArticles: []
  }

  render() {
    return (
      <div>
        <h1>APP TITLE</h1>
        <Switch>
          <Route
            path="/profile"
            render={(routerProps) => <Profile {...routerProps}/>}/>
          <Route
            path="/"
            render={(routerProps) => <ArticleContainer {...routerProps}/>}/>
        </Switch>
        <div>
          about, terms of use, privacy, contact
        </div>
      </div>
    );
  }

}

export default App;
