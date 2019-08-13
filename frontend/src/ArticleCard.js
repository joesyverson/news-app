import React from 'react';

class ArticleCard extends React.Component {
  // console.log(this.props.data);

  renderWhichButton = () => {
    if(this.props.saved) {
      return "DELETE"
    } else {
      return "SAVE"
    }
  }


  render(){
    console.log(this.props);
    return(
      <div>
      <img src={this.props.data.urlToImage ? this.props.data.urlToImage : this.props.data.url_to_image}/>
      <p>{this.props.data.publishedAt ? this.props.data.publishedAt.slice(0,10) : this.props.data.published_at.slice(0,10)}</p>
      <p><a href={this.props.data.url} target="blank">{this.props.data.title}</a></p>
      <p>by {this.props.data.author}</p>
      <p>{this.props.data.description}</p>
      <button onClick={(e) => this.props.handleClick(this.props.data)}>{this.renderWhichButton()}</button>
      <hr/>
      </div>
    )
  }
}

export default ArticleCard;
