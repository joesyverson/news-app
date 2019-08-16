import React from 'react';

const Comment = (props) => {
  console.log(props);

  function displayComment() {
    return props.data.comment_user + ": " + props.data.content + ` [${props.data.updated_at}]`
  }

  return(
    <div>
      {props.data ? displayComment() : null}
      {props.data ? <button name="delete-comment" value={props.data.id} onClick={(e) => props.handleClick(e, props.data)}>DELETE</button> : null}
    </div>
  )
}

export default Comment;
