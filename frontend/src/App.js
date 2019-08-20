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
    let articles = this.state.userData.all_articles.map((article) => article.url)
    return articles
  }

  saveOrDeleteArticle = (e, article) => {
    // debugger
    if(this.userArticleURLs().includes(article.url)) {
      // debugger
      this.deleteArticle(e, this.state.userData.all_articles.find((userArticle) => userArticle.url === article.url))
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
    .then((json) => this.fetchGetProfile())
  }

  deleteArticle = (e, article) => {
    // debugger
    fetch(`http://localhost:3000/user-articles/${article.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': localStorage.token
      }
    }).then((res) => this.fetchGetProfile())
  }

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
      extAPIArticles: json.articles.slice(0, 10),
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
      <React.Fragment>
        <div className="flex-container app-title">
          <span className="flex-column">T</span>
          <span className="flex-column">O</span>
          <span className="flex-column">P</span>
          <span className="flex-column"></span>
          <span className="flex-column">T</span>
          <span className="flex-column">E</span>
          <span className="flex-column">N</span>
        </div>
        <Switch>
          <Route
            path="/profile"
            render={(routerProps) => <Profile {...routerProps} userData={this.state.userData} deleteArticle={this.deleteArticle} getProfile={this.fetchGetProfile}/>}/>
          <Route
            path="/"
            render={(routerProps) => <ArticleContainer {...routerProps} {...this.state} handleClick={this.saveOrDeleteArticle} getProfile={this.fetchGetProfile}/>}/>
        </Switch>

        <div className="flex-container">
          <button className="flex-column">About</button>
          <button className="flex-column">Terms of Use</button>
          <button className="flex-column">Privacy</button>
          <button className="flex-column">Contact</button>
        </div>
        <span className="attribution">Powered by <a id="attribution" href="https://newsapi.org" target="blank">News A P I</a></span>
      </React.Fragment>
    );
  }

}

export default App;
