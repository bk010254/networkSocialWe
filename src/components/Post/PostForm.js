import React,{useState, useEffect} from 'react';

import './Post.css';

const PostForm = ({ addPost, initialDescription = '', initialImages = [], isEditing = false }) => {
  const [description, setDescription] = useState(initialDescription);
  const [images, setImages] = useState([]);
  


  useEffect(() => {
    if (isEditing) {
      setImages(initialImages);
    }
  }, [isEditing, initialImages]);



    const handleFileChange = (e) => {
      setImages([...e.target.files]);
    };
  
    const handleFileButtonClick = (e) => {
      e.preventDefault();
      document.getElementById('file-input').click();
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newPost = {
        id: Date.now(),
        description,
        images: Array.from(images).map((image) => URL.createObjectURL(image)),
        likes: 0,
        views: 0,
        comments: [],
      };
  
      addPost(newPost);
      if (!isEditing) {
        setDescription('');
        setImages([]);
      }
    };
  
  return (
    <form className="post-form" onSubmit={handleSubmit}>
    <textarea
      placeholder="What's on your mind?"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
      className="post-textarea"
    />
    <input
      id="file-input"
      type="file"
      multiple
      onChange={handleFileChange}
      className="post-file-input"
      style={{ display: 'none' }}
    />
    <button type="button" className="custom-file-button" onClick={handleFileButtonClick}>
      Select Images
    </button>
    <button type="submit" className="post-button">
    {isEditing ? 'Save Changes' : 'Post'}
    </button>
  </form>
  )
}

export default PostForm
