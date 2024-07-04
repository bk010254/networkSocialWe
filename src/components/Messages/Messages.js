import React from 'react';
import { useNavigate } from 'react-router-dom';

const Messages = () => {
  const navigate = useNavigate();


  const handleClick = () =>{
    navigate('/register')
  }
  return (
    <div>
      <h3 >UserMessagetyjgj</h3>
      <button onClick={handleClick}>Register</button>
    </div>
  )
}

export default Messages
