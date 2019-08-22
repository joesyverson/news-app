import React from 'react';
import {NavLink} from 'react-router-dom';

// import FriendCard from './FriendCard.js';
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
          <NavLink to="/" className="button flex-column header-button-left">HEADLINES</NavLink>
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

  updateUser = (e) => {
    e.preventDefault()
    if(this.state.userData.password) {
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
      .then(json => {
        this.setState({showForm: false})
        this.props.updateProfile(json)
      })
    } else {
      // debugger
      this.setState({
        ...this.state,
        errors: "You must enter your password to update profile"
      })
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

  showForm = () => {
    // debugger
    return(
      <form onSubmit={(e) => this.updateUser(e)}>
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
        <input type="submit" className="button" value="UPDATE"/>
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
            {this.state.errors? <div className="error">{this.state.errors}</div> : null}
            {this.state.showForm ? this.showForm() : null}
          </div>
            <div className="article-grid">
              <div className="article-column profile">
                <div className="article-text">
                  <div className="number-container"><span className="number">@{this.props.userData.name}</span></div>
                  <div className="article-title">
                    Age: {this.props.userData.age}
                    <br/>
                    Location: {this.props.userData.location}
                  </div>
                </div>
                <div  className="article-buttons">
                  <button onClick={this.setFormToState} className="block-button">UPDATE</button>
                  {this.state.showForm === true ? <button onClick={this.closeForm} className="block-button">CANCEL</button> : null}
                  <button onClick={this.destroyUser} className="block-button">DELETE</button>
                </div>
              </div>
              {this.renderArticles()}
            </div>
          </div>
      )
    } else {
      this.props.history.push('/')
      return <div></div>
    }
  }

  render() {
    return this.renderUserData()
  }
}

export default Profile;
