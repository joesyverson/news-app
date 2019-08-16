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
        this.setState({
          extAPIArticles: this.state.extAPIArticles,
          userData: json
        })
      })
    }
  }

  userArticleURLs = () => {
    // console.log(this.state.userData.all_articles);
    let articles = this.state.userData.all_articles.map((article) => article.url)
    return articles
  }

  saveOrDeleteArticle = (article) => {
    // debugger
    if(this.userArticleURLs().includes(article.url)) {
      // debugger
      this.deleteArticle(this.state.userData.all_articles.find((userArticle) => userArticle.url === article.url))
    } else {
      // debugger
      this.saveArticle(article)
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
    debugger
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


  request = () => {
    var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d1a63a25170149fcb27fe09d94da4de9';
    let req = new Request(url);
    return req
  }

  fetchGetArticles() {
    fetch(this.request())
    .then(r => r.json())
    .then(json => this.setState({
      extAPIArticles: json.articles,
      userData: this.state.userData
    }))
  }

  componentDidMount() {
    // debugger
    this.fetchGetProfile()
    this.fetchGetArticles()
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
            render={(routerProps) => <ArticleContainer {...routerProps} {...this.state} handleClick={this.saveOrDeleteArticle} getProfile={this.fetchGetProfile}/>}/>
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
