import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ArticleContainer from './ArticleContainer.js';
import Profile from './Profile.js';

class App extends React.Component {

  state = {
    extAPIArticles: []
  }

  fetchGetProfile = () => {
    if (localStorage.token) {
      fetch('http://localhost:3000/users/profile', {
        headers: {
          'Authorization': localStorage.token
        }
      })
      .then(res => res.json())
      .then(json => {
        this.setState({userData: json})
      })
    }
  }

  saveArticle = (article) => {
    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
      },
      body: JSON.stringify(article)
    }
    // debugger
    fetch('http://localhost:3000/articles/create-and-save', config)
    .then((res) => res.json())
    .then((json) => this.fetchGetProfile() )
  }

  deleteArticle = (article) => {
    // debugger
    fetch(`http://localhost:3000/user-articles/${article.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': localStorage.token
      }
    }).then((res) => this.fetchGetProfile())
  }

  // deleteComment = () => {
  //   debugger
  // }
  //
  // deleteMention = () => {
  //   debugger
  // }


  componentDidMount() {
    // debugger
    this.fetchGetProfile()
  }

  render() {
    return (
      <div>
        <h1>APP TITLE</h1>
        <Switch>
          <Route
            path="/profile"
            render={(routerProps) => <Profile {...routerProps} {...this.state.userData} deleteArticle={this.deleteArticle}/>}/>
          <Route
            path="/"
            render={(routerProps) => <ArticleContainer {...routerProps} handleClick={this.saveArticle} getProfile={this.fetchGetProfile}/>}/>
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
