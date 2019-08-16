import React from 'react';
import {Link} from 'react-router-dom';

import Signup from './Signup';
import Login from './Login.js';
import ArticleCard from './ArticleCard.js';
import Comment from './CommentCard.js';

class ArticleContainer extends React.Component {

  state = {
    articles: []
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
            <Login {...this.props} getProfile={this.props.getProfile}/>
            <Signup {...this.props} />
          </div>
        );
    }
  }

  userArticleURLs = (aPIURL) => {
    if(localStorage.token) {
      let uRLs = this.props.userData.all_articles.map((article) => {
        return article.url
      })
      return uRLs.includes(aPIURL)
    }
  }

  formatArticleCards = () => {
    // console.log(this.props.saved)
    return this.props.extAPIArticles.map((article, idx) => {
      console.log(this.props);
      // debugger
      let saved = this.userArticleURLs(article.url)
      // debugger
      return (
        <ArticleCard data={article} key={"article-container-" + idx} handleClick={this.props.handleClick} saved={saved} renderComments={this.renderComments}/>
      )
    })
  }

  render(){
    return (
      <div>
        {this.renderWhichOptions()}
        {this.formatArticleCards()}
      </div>
    );
  }
}

export default ArticleContainer;
