import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {

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

  render(){
    return (
      <div>
        {this.renderWhichOptions()}
        [profile]
      </div>
    );
  }
}

export default Profile;
