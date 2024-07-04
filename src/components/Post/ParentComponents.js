import React,{useState} from 'react'
import PostForm from './PostForm';
import Post from './Post';

const ParentComponents = () => {
    const [posts, setPosts] = useState([
        // Example posts
      ]);
    
      const addPost = (newPost) => {
        setPosts([...posts, newPost]);
      };


      const toggleComments = (id) => {
        setPosts(posts.map(post =>
          post.id === id ? { ...post, showComments: !post.showComments } : post
        ));
      };
    
      const updatePost = (postId, updatedPost) => {
        setPosts(posts.map(post => 
          post.id === postId ? { ...post, ...updatedPost } : post
        ));
      };
  return (
    <>
     <div>
      <PostForm addPost={addPost} />
      {posts.map(post => (
        <Post key={post.id} post={post} addComment={addComment} updatePost={updatePost}   toggleComments={toggleComments} />
      ))}
    </div>
    
    </>
  )
}

export default ParentComponents
