import React from 'react';
import Post from './Post'

export default ({posts, handleFavorite}) => (
    
    <div className="post-list">
    {posts.map((post, i) =>
      <Post
        key={i}
        post={post}
        handleFavorite={handleFavorite}
      />
    )}
  </div>
)