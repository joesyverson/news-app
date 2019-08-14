import React from 'react';
import {Link} from 'react-router-dom';

import FriendCard from './FriendCard.js';
import ArticleCard from './ArticleCard.js';

class Profile extends React.Component {

  renderWhichOptions = () => {
    if(localStorage.token) {
      return(
        <div>
          <Link to="/">Headlines</Link>
          <Link to="/" onClick={() => localStorage.clear()}>Signout</Link>
        </div>
      );
    }
  }

  renderFriendCards = () => {
    // debugger
    if(this.props.followees) {
      return this.props.followees.map((followee) => {
        return <FriendCard data={followee} key={followee.id} />
      })
    }
  }

  renderSavedArticles = () => {
    // debugger
    if(this.props.articles && this.props.mention_articles && this.props.comment_articles){
      let userArticles = this.props.articles.map((article) => <ArticleCard data={article} key={"saved-" + article.id} handleClick={this.props.deleteArticle} saved={true}/>)

      let mentionArticles = this.props.mention_articles.map((article) => <ArticleCard data={article} saved={true} key={"mentioned" + article.id}/>)

      let commentArticles = this.props.uniq_comment_articles.map((article, idx) => <ArticleCard data={article} key={"commented" + idx} saved={true}/>)
      let allSavedArticles = [...userArticles.concat(mentionArticles, commentArticles)]
      // console.log(allSavedArticles);
      // debugger
      return allSavedArticles
    }
  }

  renderUserData = () => {
    if(!localStorage.token) {
      this.props.history.push('/')
      return <div></div>
    } else {
      return(
        <div>
          {this.renderWhichOptions()}
          <h3>@{this.props.name}</h3>
          <p>Age: {this.props.age}</p>
          <p>Location: {this.props.city}</p>
          <div>
            <h4>Articles</h4>
            {this.renderSavedArticles()}
          </div>
          <div>
            <h4>Friends</h4>
            {this.renderFriendCards()}
          </div>
        </div>
      )
    }
  }

  render() {
    return this.renderUserData()
  }
}

export default Profile;
