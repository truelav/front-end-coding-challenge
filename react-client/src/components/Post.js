import React from 'react'

export default ({post}) => (
    
  <div className="post">
    <h3>{post.title}</h3>
    <p>{post.post}</p>
    <img src={post.url} width={100}/> 
    {post.tags.map( (tag, i) => 
         <div key={i}>{tag}</div>
    )}
  </div>   
)