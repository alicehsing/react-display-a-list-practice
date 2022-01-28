import React from 'react';

export default function PostItem({
  title,
  user,
  replies,
}) {
  return <div className="post-item">
    <p>{user}: {title}</p>
    <div className="post-replies">
        Replies: 
      {
        replies.map((reply, i) =>
          <p key={`${reply}-${i}`}>{reply}</p>
        )
      }
    </div>
  </div>;
}

