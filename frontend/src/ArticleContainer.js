import React from 'react';
import {Link} from 'react-router-dom';

import Signup from './Signup';
import Login from './Login.js';
import ArticleCard from './ArticleCard.js';

class ArticleContainer extends React.Component {

  state = {
    articles: []
  }

  request = () => {
    var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d1a63a25170149fcb27fe09d94da4de9';
    let req = new Request(url);
    return req
  }

  componentDidMount() {
    fetch(this.request())
    .then(r => r.json())
    .then(json => this.setState({articles: json.articles}))
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
            <Login {...this.props} />
            <Signup {...this.props} />
          </div>
        );
    }
  }

  formatArticleCards = () => this.state.articles.map((article, idx) => <ArticleCard data={article} key={idx}/>)

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
