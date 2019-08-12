import React from 'react';

class ArticleCard extends React.Component {
  // console.log(this.props.data);

  saveArticle = () => {
    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
      },
      body: JSON.stringify(this.props)
    }
    fetch('http://localhost:3000/articles/create-and-save', config)
    .then((res) => res.json())
    .then((json) => this.props.reset() )
  }

  render(){
    console.log(this.state);
    return(
      <div>
      <img src={this.props.data.urlToImage ? this.props.data.urlToImage : this.props.data.url_to_image}/>
      <p>{this.props.data.publishedAt ? this.props.data.publishedAt.slice(0,10) : this.props.data.published_at.slice(0,10)}</p>
      <p><a href={this.props.data.url} target="blank">{this.props.data.title}</a></p>
      <p>by {this.props.data.author}</p>
      <p>{this.props.data.description}</p>
      <button onClick={this.saveArticle}>Save</button>
      <hr/>
      </div>
    )
  }
}

export default ArticleCard;
