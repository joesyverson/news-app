import React from 'react';

const FriendCard = (props) => {
  console.log(props);
  return(
    <div>
      <h4>Friends</h4>
      {props.data.name}
    </div>
  )
}

export default FriendCard;
