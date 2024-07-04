import React,{useState} from 'react'

const CommentsForm = ({ postId, addComment,hideForm }) => {
    const [text, setText] = useState('');
   

    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (text.trim()) {
        const newComment = {
          id: Date.now(),
          text,
        };
  
        addComment(postId, newComment);
        setText('');
        hideForm(); // Hide the form after submitting the comment
      }
    };
  
  return (
   
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment"
        required
      />
      <button type="submit" className='button-comments'>Comment</button>
    </form>
   
  )
}

export default CommentsForm
