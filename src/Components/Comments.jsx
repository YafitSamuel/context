import React from 'react';
import Views from '../Components/Views';
import CommentsProvider from '../Context';

function Comments() {
//   console.log('cddvvd');
  return (
    <div>
      <h1>Hello Comments!</h1>
      <CommentsProvider>
      <Views />
      </CommentsProvider>
     
    </div>
  );
}
export default Comments;