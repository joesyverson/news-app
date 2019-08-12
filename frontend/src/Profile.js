import React from 'react';
import {Link} from 'react-router-dom';

import FriendCard from './FriendCard.js';

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

  renderFriendCards = () => {
    // debugger
      return this.props.data.followees.map((followee) => {
        return <FriendCard data={followee} key={followee.id} />
      })
  }

  renderUserData = () => {
    // console.log(this.props);
    // debugger
    if(!localStorage.token) {
      this.props.history.push('/')
      return <div></div>
    } else {
      return(
        <div>
          {this.renderWhichOptions()}
          <h3>{this.props.data.name}</h3>
          <p>Age: {this.props.data.age}</p>
          <p>Location: {this.props.data.city}</p>
          <div>
            [articles]
          </div>
          <div>
            {this.renderFriendCards()}
          </div>
        </div>
      )
    }
  }

  render() {
    return this.renderUserData()
  }
}

export default Profile;
