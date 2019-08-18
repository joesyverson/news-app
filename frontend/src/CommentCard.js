import React from 'react';

const Comment = (props) => {
  console.log(props);

  function displayComment() {
    return props.data.comment_user + ": " + props.data.content + ` [${props.data.updated_at.slice(0, 10)}]`
  }

  function showDeleteButton() {
    if(props.data) {
      return props.currentUser === props.data.comment_user ? <button name="delete-comment" value={props.data.id} onClick={(e) => props.handleClick(e, props.data)}>DELETE</button> : null
    }
  }

  return(
    <div>
      {props.data ? displayComment() : null}
      {props.data ? showDeleteButton() : null}
    </div>
  )
}

export default Comment;
