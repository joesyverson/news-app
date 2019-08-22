import React from 'react';
import {NavLink} from 'react-router-dom';

import Signup from './Signup';
import Login from './Login.js';
import ArticleCard from './ArticleCard.js';
// import Comment from './CommentCard.js';

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
          <NavLink to="/profile" onClick={this.props.getProfile} className="button flex-column header-button-left" >
            <span>P </span>
            <span>R </span>
            <span>O </span>
            <span>F </span>
            <span>I </span>
            <span>L </span>
            <span>E </span>
          </NavLink>
          <NavLink to="/" className="button flex-column" onClick={() => localStorage.clear()}>
          <span>S </span>
          <span>I </span>
          <span>G </span>
          <span>N </span>
          <span>O </span>
          <span>U </span>
          <span>T </span>
          </NavLink>
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
    console.log(this.props);
    return (
      <div className="main-container">
      <div>
        <div className={this.state.errors? "error" : null}>
          {this.state.errors ? this.state.errors : null}
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
