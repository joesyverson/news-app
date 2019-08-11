import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import ArticleContainer from './ArticleContainer.js';
import Profile from './Profile.js';

class App extends React.Component {

  state = {
    extAPIArticles: [],
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
          <span>About</span>
          <span>Terms of Use</span>
          <span>Privacy</span>
          <span>Contact</span>
        </div>
        Powered by <a href="https://newsapi.org" target="blank">News A P I</a>
      </div>
    );
  }

}

export default App;
