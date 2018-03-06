import React from 'react'


export default ({post, handleFavorite, handleTags}) => (
        
  <div className="post">
    <h3>{post.title}</h3>
    <img src={post.url} width={100}/> 
    <button onClick={ () => handleFavorite(post)}>Add Favorite</button>
    <p>{post.post}</p>
    {post.tags.map( (tag, i) => 
         <div key={i}><button onClick={ () => handleTags(tag)}>{tag}</button></div>
    )}
  </div>   
)