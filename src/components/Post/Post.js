import React, { useState, useEffect, useRef } from 'react';
import { FaThumbsUp, FaEye, FaComment, FaEllipsisV } from 'react-icons/fa';
import CommentsForm from '../Comments/CommentsForm';
import './Post.css';
import CommentsList from '../Comments/CommentsList';

const Post = ({ post, deletePost,addComment, toggleComments }) => {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const [views, setViews] = useState(post.views);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [showComments, setShowComments] = useState(true);
  const optionsMenuRef = useRef(null);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const handleToggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
    setShowComments(false)
  };

  const handleToggleOptionsMenu = () => {
    setShowOptionsMenu(!showOptionsMenu);
  };

  const handleEditPost = () => {
    console.log('edite this post ')
  };

  const handleDelete = () => deletePost(post.id);
  


  const handleToggleCommenting = () => {
    setShowComments(!showComments);
    toggleComments(post.id);
  };

















  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsMenuRef.current && !optionsMenuRef.current.contains(event.target)) {
        setShowOptionsMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="post">
      <div className="descr-ThreeDots">
        <p>{post.description}</p>
        <div className={`options-menu ${showOptionsMenu ? 'show' : ''}`} ref={optionsMenuRef}>
          <button onClick={handleToggleOptionsMenu}>
            <FaEllipsisV />
          </button>
          <div className="options-dropdown">
            <button>Hide Likes</button>
            <button onClick={handleToggleCommenting} > {showComments ? 'Hide' : 'Show'}Turn Off Commenting</button>
            <button onClick={handleDelete}>Delete Post</button>
          </div>
        </div>
      </div>
      {post.images.map((image, index) => (
        <img key={index} src={image} alt="Post" />
      ))}
      <div className="post-actions">
        <button onClick={handleLike} style={{ color: liked ? 'red' : 'grey' }}>
          <FaThumbsUp /> {likes}
        </button>
        <button>
          <FaEye /> {views}
        </button>
        {showComments && (

        <button onClick={handleToggleCommentInput}>
          <FaComment />
        </button>
        )}
      </div>
      {showCommentInput && (
  <CommentsForm
    postId={post.id}
    addComment={addComment}
    hideForm={() => setShowCommentInput(false)} // Hide form after comment is submitted
  />
)}
      <CommentsList comments={post.comments} />
    </div>
  );
};

export default Post;





// import React,{useState} from 'react';
// import { FaThumbsUp, FaEye, FaComment,FaEllipsisV } from 'react-icons/fa';
// import CommentsForm from '../Comments/CommentsForm';
// import './Post.css';

// import CommentsList from '../Comments/CommentsList';

// const Post = ({ post, addComment }) => {
//     const [likes, setLikes] = useState(post.likes);
//     const [liked, setLiked] = useState(false);
//     const [views, setViews] = useState(post.views);
//     const [showOptionsMenu, setShowOptionsMenu] = useState(false);
//     const [showCommentInput, setShowCommentInput] = useState(false);
  
//     const handleLike = () => {
//       if (!liked) {
//         setLikes(likes + 1);
//         setLiked(true);
//       } else {
//         setLikes(likes - 1);
//         setLiked(false);
//       }
//     };

//     const handleToggleCommentInput = () => {
//         setShowCommentInput(!showCommentInput);
//       };

//       const handleToggleOptionsMenu = () => {
//         setShowOptionsMenu(!showOptionsMenu);
//       };

//       const handleEditPost = () => {
//         // Implement edit post functionality here
//       };
    
//       const handleDeletePost = () => {
//         // Implement delete post functionality here
//       };

//   return (
//     <div className="post">
//       <div className='descr-ThreeDots'>

//     <p>{post.description}</p>
//     <button  onClick={handleToggleOptionsMenu}>
//             <FaEllipsisV />
//           </button>
//       </div>

//       {showOptionsMenu && (
//             <div className="options-dropdown">
//               <button onClick={handleEditPost}>Edit Post</button>
//               <button onClick={handleDeletePost}>Delete Post</button>
//             </div>
//           )}


//     {post.images.map((image, index) => (
//       <img key={index} src={image} alt="Post" />
//     ))}
//     <div className="post-actions">
//       <button onClick={handleLike} style={{ color: liked ? 'red' : 'grey' }}>
//         <FaThumbsUp /> {likes}
//       </button>
//       <button>
//         <FaEye /> {views}
//       </button>
//       <button onClick={handleToggleCommentInput}>
//           <FaComment />
//         </button>
//     </div>
//     {showCommentInput ? <CommentsForm postId={post.id} addComment={addComment} /> : null}
//     <CommentsList comments={post.comments} />
//   </div>
   
    
    
//   )
// }

// export default Post
