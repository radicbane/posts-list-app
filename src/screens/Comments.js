import React from 'react'

const Comments = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <p>{comment.body}</p>
    </div>
  ))
}

export default Comments
