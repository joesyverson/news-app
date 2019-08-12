import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ArticleContainer from './ArticleContainer.js';
import Profile from './Profile.js';

class App extends React.Component {

  state = {
    extAPIArticles: []
  }

  reset = () => {
    if (localStorage.token) {
      fetch('http://localhost:3000/users/profile', {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(res => res.json())
      .then(profileData => {
        this.setState({userData: profileData})
      })
    }
  }

  componentDidMount() {
    this.reset()
  }

  render() {
    return (
      <div>
        <h1>APP TITLE</h1>
        <Switch>
          <Route
            path="/profile"
            render={(routerProps) => <Profile {...routerProps} {...this.state.userData}/>}/>
          <Route
            path="/"
            render={(routerProps) => <ArticleContainer {...routerProps} reset={this.reset}/>}/>
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
