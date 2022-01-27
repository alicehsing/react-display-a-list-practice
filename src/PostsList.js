import React from 'react';
import PostItem from './PostItem.js';

export default function PostsList(props) {
  return <div className="post-list">
    {
      props.posts.map((post, i) =>
        <PostItem
          key={`${post}-${i}`}
          {...post}/>
      )}
  </div>;
}

