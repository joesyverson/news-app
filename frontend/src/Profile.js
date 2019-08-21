import React from 'react';
import {NavLink} from 'react-router-dom';

import FriendCard from './FriendCard.js';
import ArticleCard from './ArticleCard.js';

class Profile extends React.Component {

  state = {
    userData: {},
    showForm: false
  }

  fillForm = () => {
    if (localStorage.token) {
      fetch('http://localhost:3000/users/profile', {
        headers: {
          'Authorization': localStorage.token
        }
      })
      .then(res => res.json())
      .then(json => {
        this.setState({
          userData: json,
          showForm: !this.state.showForm
        })
      })
    }
  }

  renderWhichOptions = () => {
    if(localStorage.token) {
      return(
        <div className="flex-container">
          <NavLink to="/" className="button flex-column">HEADLINES</NavLink>
          <NavLink to="/" onClick={() => localStorage.clear()} className="button flex-column">SIGNOUT</NavLink>
        </div>
      );
    }
  }

  setFormToState = () => {
    if(this.state.showForm) {
      this.closeForm()
      this.updateUser()
    } else {
      this.fillForm()
    }
  }

  handleChange = (e) => {
    this.setState({
      userData: {...this.state.userData, ...{[e.target.name]: e.target.value}},
      showForm: this.state.showForm
    })
  }

  closeForm = () => {
    this.setState({
      userData: this.state.userData,
      showForm: !this.state.showForm
      }
    )
  }

  updateUser = () => {
    // debugger
    let config = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
      },
      body: JSON.stringify(this.state.userData)
    }
    fetch('http://localhost:3000/users/profile/edit', config)
    .then(res => res.json())
    .then(json => this.props.updateProfile(json))
  }

  // renderFriendCards = () => {
  //   // debugger
  //   if(this.props.followees) {
  //     return this.props.followees.map((followee) => {
  //       return <FriendCard data={followee} key={followee.id} />
  //     })
  //   }
  // }

  showForm = () => {
    // debugger
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="username"
          value={this.state.userData.name}
          onChange={(e) => this.handleChange(e)}/>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.userData.password}
          onChange={(e) => this.handleChange(e)}/>
        <input
          type="number"
          name="age"
          placeholder="age"
          value={this.state.userData.age}
          onChange={(e) => this.handleChange(e)}/>
        <input
          type="text"
          name="location"
          placeholder="location"
          value={this.state.userData.location}
          onChange={(e) => this.handleChange(e)}/>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={this.state.userData.email}
          onChange={(e) => this.handleChange(e)}/>
        <input type="submit" className="button"/>
      </form>
    )
  }

  renderArticles = () => {
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
    if(this.props.userData.all_articles) {
      return this.props.userData.all_articles.map((article) => <ArticleCard data={article} key={article.id} handleClick={this.props.deleteArticle} saved={true} currentUser={this.props.userData.name} getProfile={this.props.getProfile}/>)
    }
  }

  destroyUser = () => {
    let config = {
      method: 'DELETE',
      headers: {
        'Authorization': localStorage.token
      }
    }
    fetch('http://localhost:3000/users/delete', config)
    .then(() => localStorage.clear())
    .then(() => this.props.history.push('/'))
  }

  renderUserData = () => {
    if(this.props.userData) {
      return(
        <div>
          {this.renderWhichOptions()}

          <div>
            <div className="article-grid">
            <div className="profile flex-column">
            <div className="profile-item" id="username">@{this.props.userData.name}</div>
            <div className="profile-item">Age: {this.props.userData.age}</div>
            <div className="profile-item">Location: {this.props.userData.location}</div>
            {this.state.showForm ? this.showForm() : null}
            <div>
            <button onClick={this.setFormToState} className="article-buttons">UPDATE</button>
            {this.state.showForm === true ? <button onClick={this.closeForm}>CANCEL</button> : null}
            </div>
            </div>
            <button onClick={this.destroyUser}>DELETE</button>
              {this.renderArticles()}
            </div>
          </div>
        </div>
      )
    } else {
      this.props.history.push('/')
      return <div></div>
    }
  }
  // <div>
  // <h4>Friends</h4>
  // {this.renderFriendCards()}
  // </div>

  render() {
    // console.log(this.props);
    return this.renderUserData()
  }
}

export default Profile;
