import React from 'react';
import {NavLink} from 'react-router-dom';

import Signup from './Signup';
import Login from './Login.js';
import ArticleCard from './ArticleCard.js';
import Comment from './CommentCard.js';

class ArticleContainer extends React.Component {

  state = {
    errors: ""
  }

  setErrorToState = (error) => {
    // debugger
    this.setState({errors: error})
  }

  renderWhichOptions = () => {
    // debugger
    if(localStorage.token) {
      return(
        <div className="flex-container">
          <NavLink to="/profile" className="button flex-column" >PROFILE</NavLink>
          <NavLink to="/" className="button flex-column" onClick={() => localStorage.clear()}>SIGNOUT</NavLink>
        </div>
      );
    } else {
        return(
          <div className="flex-container">
            <Login {...this.props} getProfile={this.props.getProfile} showError={this.setErrorToState}/>
            <Signup {...this.props} showError={this.setErrorToState}/>
          </div>
        );
    }
  }

  userArticleURLs = (aPIURL) => {
    if(this.props.userData) {
      // debugger
      let uRLs = this.props.userData.all_articles.map((article) => {
        return article.url
      })
      return uRLs.includes(aPIURL)
    }
  }


  currentUser = () => this.props.userData ? this.props.userData.name : null

  formatArticleCards = () => {
    if(this.props.extAPIArticles) {
      return this.props.extAPIArticles.map((article, idx) => {
        let saved = this.userArticleURLs(article.url)
        return (
          <ArticleCard data={article} key={"article-container-" + idx} num={idx + 1} currentUser={this.currentUser()} handleClick={this.props.handleClick} saved={saved} renderComments={this.renderComments}/>
        )
      })
    }
  }

  showDate = () => {
    let date = new Date().toString().slice(4, 15)
    let month = date.slice(0, 3)
    let day = date.slice(4, 6)
    let year = date.slice(7)
    let newDate = day + " " + month + " " + year
    return newDate
  }

  render(){
    console.log(this.showDate());
    return (
      <div className="main-container">
      <div>
        <div className="error">
          {this.state.errors}
        </div>
        {this.renderWhichOptions()}
        <div id="date">
          {this.showDate()}
        </div>
      </div>
      <div className="article-grid">
        {this.formatArticleCards()}
      </div>
      </div>
    );
  }
}

export default ArticleContainer;
