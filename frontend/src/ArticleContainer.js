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

  renderWhichOptions = () => {
    // debugger
    if(localStorage.token) {
      return(
        <div>
          <NavLink to="/profile" className="button" >Profile</NavLink>
          <NavLink to="/" className="button" onClick={() => localStorage.clear()}>Signout</NavLink>
        </div>
      );
    } else {
        return(
          <div>
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

  setErrorToState = (error) => {
    // debugger
    this.setState({errors: error})
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

  render(){
    return (
      <React.Fragment>
      <div>
        {this.state.errors}
      </div>
      <div>
        {this.renderWhichOptions()}
        {this.formatArticleCards()}
      </div>
      </React.Fragment>
    );
  }
}

export default ArticleContainer;
