import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ArticleContainer from './ArticleContainer.js';
import Profile from './Profile.js';

class App extends React.Component {

  state = {
    username: "",
    extAPIArticles: []
  }

  renderWhichOptions = () => {
    if(this.state.username) {
      return "profile, invite a friend"
    } else {
      return "login, signup"
    }
  }

  render() {
    return (
      <div>
        <h1>app-title</h1>
        <div>
          {this.renderWhichOptions()}
        </div>
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
