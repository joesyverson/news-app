import React from 'react';
import {Link} from 'react-router-dom';

import FriendCard from './FriendCard.js';
import ArticleCard from './ArticleCard.js';

class Profile extends React.Component {

  state = {
    userData: []
  }

  componentDidMount = () => {
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

  // renderFriendCards = () => {
  //   // debugger
  //   if(this.props.followees) {
  //     return this.props.followees.map((followee) => {
  //       return <FriendCard data={followee} key={followee.id} />
  //     })
  //   }
  // }

  renderArticles = () => {
    console.log(this.props);
    // debugger
    // if(this.props.articles && this.props.mention_articles && this.props.comment_articles){
    //   let userArticles = this.props.articles.map((article) => <ArticleCard data={article} key={"saved-" + article.id} handleClick={this.props.deleteArticle} saved={true}/>)
    //
    //   let mentionArticles = this.props.mention_articles.map((article) => <ArticleCard data={article} saved={true} key={"mentioned" + article.id}/>)
    //
    //   let commentArticles = this.props.uniq_comment_articles.map((article, idx) => <ArticleCard data={article} key={"commented" + idx} saved={true}/>)
    //   let allSavedArticles = [...userArticles.concat(mentionArticles, commentArticles)]
    //
    //   return allSavedArticles
    // }
    if(this.props.all_articles) {
      return this.props.all_articles.map((article) => <ArticleCard data={article} key={article.id} handleClick={this.props.deleteArticle} saved={true}/>)
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
          <h3>@{this.state.userData.name}</h3>
          <p>Age: {this.state.userData.age}</p>
          <p>Location: {this.state.userData.city}</p>
          <div>
            <h4>Articles</h4>
            {this.renderArticles()}
          </div>
        </div>
      )
    }
  }
  // <div>
  // <h4>Friends</h4>
  // {this.renderFriendCards()}
  // </div>

  render() {
    return this.renderUserData()
  }
}

export default Profile;
