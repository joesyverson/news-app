import React from 'react';
import {Link} from 'react-router-dom';

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
          <Link to="/profile">Profile</Link>
          <Link to="/" onClick={() => localStorage.clear()}>Signout</Link>
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

  formatArticleCards = () => {
    if(this.props.extAPIArticles) {
      return this.props.extAPIArticles.map((article, idx) => {
        let saved = this.userArticleURLs(article.url)
        return (
          <ArticleCard data={article} key={"article-container-" + idx} handleClick={this.props.handleClick} saved={saved} renderComments={this.renderComments}/>
        )
      })
    }
  }

  render(){
    return (
      <div>
      <div>
        {this.state.errors}
      </div>
      <div>
        {this.renderWhichOptions()}
        {this.formatArticleCards()}
      </div>
      </div>
    );
  }
}

export default ArticleContainer;
