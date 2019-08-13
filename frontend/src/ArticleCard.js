import React from 'react';

class ArticleCard extends React.Component {
  // console.log(this.props.data);

  state = {
    comment: ""
  }

  renderWhichButton = () => {
    if(this.props.saved) {
      return "DELETE"
    } else {
      return "SAVE"
    }
  }

  handleSubmit = () => {
    console.log(this.state.comment);
    debugger
  }

  handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    debugger
  }

  renderUserButtons = () => {
    return(
      <div>
        <button onClick={(e) => this.props.handleClick(this.props.data)}>{this.renderWhichButton()}</button>
        <form>
          <textarea onChange={(e) => this.handleChange(e)}></textarea>
          <input type="submit" value="COMMENT"/>
        </form>
      </div>
    )
  }


  render(){
    return(
      <div>
        <img src={this.props.data.urlToImage ? this.props.data.urlToImage : this.props.data.url_to_image}   alt={this.props.data.title}/>
        <p>{this.props.data.publishedAt ? this.props.data.publishedAt.slice(0,10) :   this.props.data.published_at.slice(0,10)}</p>
        <p><a href={this.props.data.url} target="blank">{this.props.data.title}</a></p>
        <p>by {this.props.data.author}</p>
        <p>{this.props.data.description}</p>
        {localStorage.token ? this.renderUserButtons() : null}
        <h3>Comments</h3>
        <hr/>
      </div>
    )
  }
}

// <button onClick={(e) => this.props.handleClick(this.props.data)}>{this.renderWhichButton()}</button>
export default ArticleCard;
