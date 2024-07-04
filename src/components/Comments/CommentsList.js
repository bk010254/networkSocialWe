import React from 'react'

const CommentsList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p >{comment.text}</p>
        </div>
      ))}
    </div>
  )
}

export default CommentsList


