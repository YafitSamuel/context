import React from 'react';
import { useContext } from 'react';
import { CommentsContext } from '../Context';

function Views() {
  const comments = useContext(CommentsContext);
  // console.log('comment', comment);
  return (
    <div>
      {comments.map((comment) => (
        <>
          <p>Name:{comment.Name}</p>
          <p>Text:{comment.Text}</p>
          <p>Views:{comment.Views}</p>
        </>
      ))}
      
    </div>
  );
}
export default Views;