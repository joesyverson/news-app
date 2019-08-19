import React from 'react';

import Comment from './CommentCard.js'

class ArticleCard extends React.Component {
  state = {
    comment: "",
    comments: [],
    jsxComments: [],
    displayComments: false
  }

  renderWhichButton = () => {
    if(this.props.saved) {
      return "DELETE"
    } else {
      return "SAVE"
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // debugger
    let commentData = {...this.props.data, ...{content: this.state.comment}};
    // debugger
    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
      },
      body: JSON.stringify(commentData)
    }
    fetch('http://localhost:3000/comments', config)
    .then((res) => res.json())
    .then((json) => this.setState({
      comment: "",
      comments: json,
      jsxComments: this.state.jsxComments,
      displayComments: this.state.displayComments
    }))
    .then(() => this.fetchGetComments())
    // debugger
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = (e, data) => {
    // debugger
    if(e.target.name === "delete-comment"){
      // debugger
      fetch(`http://localhost:3000/comments/${data.id}`, {
          method: 'DELETE',
          headers: {
            Authorization: localStorage.token
          }
      }).then((json) => this.fetchGetComments())
    } else if(e.target.dataset.name === 'container') {
        if(!this.state.displayComments) {
          this.fetchGetComments()
        } else {
          this.setState({
            comment: this.state.commment,
            comments: this.state.comments,
            jsxComments: [],
            displayComments: false
          })
        }
    }
  }

  renderUserButtons = () => {
    return(
      <div>
        <button  onClick={(e) => this.props.handleClick(e, this.props.data)}>{this.renderWhichButton()}</button >
      </div>
    )
  }

  fetchGetComments = () => {
    fetch(`http://localhost:3000/articles/comments`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.token
      },
      body: JSON.stringify(this.props.data)
    })
    .then((res) => res.json())
    .then((json) => this.setState({
      comment: this.state.commment,
      comments: json,
      jsxComments: this.state.jsxComments,
      displayComments: true
    })).then(() => this.state.comments[0].id !== 0 ? this.formatComments() : null)
  }

  formatComments = () => {
    // debugger
    console.log(this.state.comments);
    let jsxComments = []
    if(this.state.comments) {
      jsxComments = this.state.comments.map((comment, idx) => <Comment data={comment} key={idx} handleClick={this.handleClick} currentUser={this.props.currentUser}/>)
      this.setState({
        comment: this.state.comment,
        comments: this.state.comments,
        jsxComments: jsxComments,
        displayComments: true
      })
    }
  }

  displayCommentForm = () => {
    return(
      <React.Fragment>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <textarea name="comment" value={this.state.comment} onChange={(e) => this.handleChange(e)}></textarea>
        <input type="submit" value="COMMENT" className="button"/>
      </form>
      </React.Fragment>
    )
  }

  render(){
    return(
      <div>
      {this.props.num ? <div>{this.props.num}</div> : null}
        <div>{this.props.data.publishedAt ? this.props.data.publishedAt.slice(0,10) :   this.props.data.published_at.slice(0,10)}</div>
        <div>{this.props.data.title}</div>
        <button><a href={this.props.data.url} target="blank">VISIT</a></button>
        <div>{this.props.data.description}</div>
        {localStorage.token ? this.renderUserButtons() : null}
        <div>
        {localStorage.token ? <button data-name="container" onClick={(e) => this.handleClick(e, false)}>{localStorage.token? "Comments" : null}</button> : null}
          {this.state.displayComments? this.displayCommentForm() : null}
          {this.state.jsxComments}
        </div>
      </div>
    )
  }
}
// <p> {this.props.data.author ? this.props.data.author : this.props.source.name}</p>
// <img src={this.props.data.urlToImage ? this.props.data.urlToImage : this.props.data.url_to_image}   alt={this.props.data.title}/>

export default ArticleCard;
