import React from 'react';

const Comment = (props) => {


  function displayComment() {
    return props.data.comment_user + ": " + props.data.content + ` [${props.data.updated_at.slice(0, 10)}]`
  }

  function showDeleteButton() {
    if(props.data) {
      return props.currentUser === props.data.comment_user ? <button value={props.data.id} onClick={(e) => props.handleClick(e, props.data)} name="delete-comment">DELETE</button> : null
    }
  }

  return(
    <div className="comment">
      {props.data ? displayComment() : null}
      <div className="delete-comment">
        {props.data ? showDeleteButton() : null}
      </div>
    </div>
  )
}

export default Comment;
