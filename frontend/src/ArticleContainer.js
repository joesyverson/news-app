import React from 'react';
import {Link} from 'react-router-dom';

import Signup from './Signup'
import Login from './Login.js'

class ArticleContainer extends React.Component {

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

  render(){
    return (
      <div>
        {this.renderWhichOptions()}
        [article container]
      </div>
    );
  }
}

export default ArticleContainer;
