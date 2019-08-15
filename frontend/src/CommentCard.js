import React from 'react';

const Comment = (props) => {
  console.log(props);

  function displayComment() {
    return props.data.comment_user + ": " + props.data.content + ` [${props.data.updated_at}]`
  }

  return(
    <div>
      {props.data ? displayComment() : null}
    </div>
  )
}

export default Comment;
