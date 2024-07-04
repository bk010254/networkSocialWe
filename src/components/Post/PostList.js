import React , { useState }from 'react';
import HomePage from '../Home/HomePage';
import Post from './Post';
import PostForm from './PostForm';

const PostList = (toggleComments,deletePost,) => {
    const [posts, setPosts] = useState([]);

    const addPost = (newPost) => {
      setPosts([newPost, ...posts]);
    };
  
    const addComment = (postId, comment) => {
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [comment, ...post.comments]
          };
        }
        return post;
      }));
    };
  return (
    <>

<div>
      <PostForm addPost={addPost} />
      {posts.map((post) => (
        <Post key={post.id} post={post} addComment={addComment}  toggleComments={toggleComments}  deletePost={deletePost}/>
      ))}
    </div>
    </>
  )
}

export default PostList
