import React from 'react';

const Comment = (props) => {


  function displayComment() {
    return (
      <div>
        <div><span className="comment-author">{props.data.comment_user + ": "}</span>{" " + props.data.content}</div>
        <div className="comment-date">{props.data.updated_at.slice(0, 10)}</div>
      </div>
    )
  }

  function showDeleteButton() {
    if(props.data) {
      return props.currentUser === props.data.comment_user ? <button value={props.data.id} onClick={(e) => props.handleClick(e, props.data)} name="delete-comment">DELETE</button> : null
    }
  }


  return(
    <div className="comment">
      <div className="comment-text">
        {props.data ? displayComment() : null}
      </div>
      <div className="delete-comment">
        {props.data ? showDeleteButton() : null}
      </div>
    </div>
  )
}

export default Comment;
