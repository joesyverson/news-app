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
    console.log(this.props.data);
    return (
      <div>
        {this.renderWhichOptions()}
        <h3>{this.props.data.name}</h3>
        <p>Age: {this.props.data.age}</p>
        <p>Location: {this.props.data.city}</p>
      </div>
    );
  }
}

export default Profile;
