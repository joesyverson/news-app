import React from 'react';

const FriendCard = (props) => {
  // console.log(props);
  return(
    <div>
      {props.data.name}
    </div>
  )
}

export default FriendCard;
