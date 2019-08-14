import React from 'react';

import Comment from './CommentCard.js'

class ArticleCard extends React.Component {
  // console.log(this.props.data);

  state = {
    comment: "",
    comments: []
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
      comment: this.state.comment,
      comments: json
    }))
    // debugger
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    // console.log(e.target.value)
    // debugger
  }

  renderUserButtons = () => {
    return(
      <div>
        <button onClick={(e) => this.props.handleClick(this.props.data)}>{this.renderWhichButton()}</button>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <textarea name="comment" value={this.state.comment} onChange={(e) => this.handleChange(e)}></textarea>
          <input type="submit" value="COMMENT"/>
        </form>
      </div>
    )
  }

  componentDidMount = () => {
    // debugger
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
      comments: json
    }))
  }

  renderComments = () => {
    return this.state.comments.map((comment, idx) => {
      // debugger
      return <Comment data={comment} key={idx}/>
    })
  }


  render(){
    // debugger
    console.log(this.props.saved)
    return(
      <div>
        <img src={this.props.data.urlToImage ? this.props.data.urlToImage : this.props.data.url_to_image}   alt={this.props.data.title}/>
        <p>{this.props.data.publishedAt ? this.props.data.publishedAt.slice(0,10) :   this.props.data.published_at.slice(0,10)}</p>
        <p><a href={this.props.data.url} target="blank">{this.props.data.title}</a></p>
        <p>by {this.props.data.author}</p>
        <p>{this.props.data.description}</p>
        {localStorage.token ? this.renderUserButtons() : null}
        <h3>Comments</h3>
        <div>
        {this.renderComments()}
        </div>
        <hr/>
      </div>
    )
  }
}
export default ArticleCard;
