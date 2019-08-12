import React from 'react';

const ArticleCard = (props) => {
  // console.log(props.data);
  return(
    <div>
      <p><a href={props.data.url} target="blank">{props.data.title}</a></p>
      <p>by {props.data.author}</p>
      <p>{props.data.description}</p>
      <hr/>
    </div>
  )
}
// <p>{props.data.publishedAt.slice(0,10)}</p>
// <img src={props.data.urlToImage}/>

export default ArticleCard;
