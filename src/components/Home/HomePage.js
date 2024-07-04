import React, { useState } from 'react';
import './Home.css';
import AddV from '../Imgages/slide1.jpg';
import { RiUserSettingsLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { TiUserAdd } from "react-icons/ti";
import PostList from '../Post/PostList';
import Post from '../Post/Post';
import PostForm from '../Post/PostForm';
import { Box, Avatar, Typography, IconButton, Container, Button } from '@mui/material';
import FriendsList from '../SearchFriends/FriendsList';
import ToggleButtom from '../Toggle/ToggleButtom';




const HomePage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const [people] = useState([
    {
      "Name": "John Wick",
      "Avatar": "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      "City": "New York",
    },
    {
      "Name": "Peter Parker",
      "Avatar": "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
      "City": "Queens, NY",
    },
    {
      "Name": "Rustin Cohle",
      "Avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_F8C4HIpNYVo0MdFY8Jr4_IM_m4lXTLaUw2JeNHMT-NXd3Mpi_c4gIY9phccoEi-yjyk&usqp=CAU",
      "City": "West Monroe, Louisiana",
    },
    {
      "Name": "Tommy Shelby",
      "City": "Birmingham",
    }
  ]);


  const handleUpdateProfile = () => {
    navigate('/register')
  }
  const handleUpdatePassword = () => {
    navigate('/password')
  }

  const handleDeleteAccount = () => {
    navigate('/homePage')
  }


  const People = [
    {

      "Name": "John Wick",
      "Avatar": "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      "City": "New York",

    },
    {

      "Name": "Peter Parker",
      "Avatar": "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
      "City": "Queens, NY",

    },
    {

      "Name": "Rustin Cohle",
      "Avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_F8C4HIpNYVo0MdFY8Jr4_IM_m4lXTLaUw2JeNHMT-NXd3Mpi_c4gIY9phccoEi-yjyk&usqp=CAU",
      "City": "West Monroe, Louisiana",


    },
    {

      "Name": "Tommy Shelby",
      "City": "Birmingham",

    }
  ]


  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

 

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

  

  
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };



  const horizontalLineStyle = {
    borderTop: '1px solid #ccc', // Grey color
    margin: '4px 0', // Adjust margin as needed
  };
  const horizontalLineStyle2 = {
    borderTop: '1px solid #ccc', // Grey color
    margin: '3px 0', // Adjust margin as needed
  };
  const horizontalLineStyle3 = {
    borderTop: '1px solid #ccc', // Grey color
    margin: '6px 0', // Adjust margin as needed
  };
  const horizontalLineStyle4 = {
    borderTop: '1px solid #ccc', // Grey color
    margin: '14px 0', // Adjust margin as needed
  };


  const handleFileButtonClick = () => {
    document.getElementById('file-input').click();
  };
  const handleChange1 = (e) => {
    setSearchTerm(e.target.value);
  };


  const filteredPeople = people.filter(person =>
    person.Name.toLowerCase().includes(searchTerm.toLowerCase()) 
    
  );

  const toggleComments = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, showComments: !post.showComments } : post
    ));
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6   m-4" >
          <div className="flex items-center justify-between">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className='pr-20'>
              <span className="font-bold text-lg">Followers</span>
              <span className="block text-gray-600">100k</span>
            </div>
            <RiUserSettingsLine style={{ width: 52, height: 26 }} />
          </div>
          <div style={horizontalLineStyle}></div>
          <div className='user-locationD'>
            <div className='locationuser'>
              <CiLocationOn style={{ width: 52, height: 26, color: '#0096FF' }} />
              <span>USA(New York)</span>
            </div>
            <div className='EmpBag'>
              <BsBag style={{ width: 52, height: 26, color: '#0096FF' }} />
              <span>Devid</span>
            </div>
          </div>
          <div style={horizontalLineStyle2}></div>

          <p>Who's viewed your profile -<span style={{ color: '#000' }}>11</span></p>

          <p>Impressions of your post -<span>11</span></p>


          <div style={horizontalLineStyle3}></div>

          <h4>Social Profiles</h4>


          <div className="flex items-center justify-between">
            <FaTwitter style={{ width: 52, height: 26, color: '#00acee' }} />
            {/* <img
              src={logoPic}
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            /> */}
            <div style={{ marginRight: 90 }}>
              <span className="font-bold text-lg">Twitter</span>
              <span className="block text-gray-600">Social Network</span>
            </div>

            <GoPencil style={{ width: 52, height: 20 }} onClick={toggleInput} />


          </div>

          {showInput && (

            <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
              <button
                className="!absolute right-1 top-1 z-10 select-none rounded  py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none  bg-orange-500"
                type="button"
                data-ripple-light="true"
              >
                ADD
              </button>
              <input
                type="email"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                required
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Enter your Twitter Url
              </label>
            </div>

          )}




          <div className="flex items-center justify-between">

            <FaLinkedin style={{ width: 52, height: 26, color: '#0077B5' }} />
            <div style={{ marginRight: 90 }}>
              <span className="font-bold text-lg">Linkdin</span>
              <span className="block text-gray-600">Social Network</span>
            </div>

            <GoPencil style={{ width: 52, height: 20 }} />
          </div>

          <div style={horizontalLineStyle4}></div>

          <button class=" hover:bg-orange-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full" onClick={handleUpdateProfile}>
            UPDATE PROFILE
          </button>

          <span style={{ display: 'flex', justifyContent: 'center' }}>OR</span>

          <button class=" hover:bg-orange-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full" onClick={handleUpdatePassword}>
            UPDATE PASSWORD
          </button>

          <span style={{ display: 'flex', justifyContent: 'center' }}>OR</span>

          <button class=" hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"  onClick={handleDeleteAccount}>
            DELETE ACCOUNT
          </button>



<ToggleButtom />











        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4">

          <div className="flex items-center justify-between">
            <img style={{ marginRight: 15 }}
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
              <button
                className="!absolute right-1 top-1 z-10 select-none rounded  py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none bg-cyan-500"
                type="button"
                data-ripple-light="true"
              >
                Search
              </button>
              <input
                type="text"
                value={searchTerm}
        onChange={handleChange1}
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                required
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Search Friends...
              </label>


              
            </div>


            <RiUserSettingsLine style={{ width: 52, height: 26 }} />

           
      


          </div>

          
          {searchTerm && filteredPeople.length > 0 && (
           
       <ul>
       {filteredPeople.map((person, index) => (
         <li key={index} className='listSearchFriends' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
           <img 
             src={person.Avatar || 'https://via.placeholder.com/50'} 
             alt={person.Name} 
             style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} 
           />
           <div>
             <strong>{person.Name}</strong><br />
             <span>{person.City}</span>
           </div>
         </li>
       ))}
     </ul>
    
      )}
          





          
          <PostForm addPost={addPost} />
      <div className="posts-container">
        {posts.map((post) => (
          <Post key={post.id} post={post} addComment={addComment} toggleComments={toggleComments}  deletePost={deletePost}/>
        ))}
      </div>

          {/* <FriendsList /> */}



        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  bg-white m-4">
          <div className='flex justify-between'>
            <h4>Sponsored</h4>
            <span>Create Ad</span>
          </div>
          
          <img src={AddV} style={{ borderRadius: 20 }} />
          <div className='flex justify-between'>
            <h6 style={{ marginTop: 15 }}> MikaCosmetics</h6>
            <span style={{ marginTop: 15, fontSize: 14 }}>mikacosmetics.com</span>
          </div>
          <p>Your pathway to stunning and immaculate beauty and made sure your skin is exfoliating skin and shining like light.</p>



          <Container>
      <Box className="friend-list-container" mt={4}>
        <h3 className='FriendTitle'>FriendsList</h3>
        {/* <Typography variant="h4" component="h2" gutterBottom>
          Friends
        </Typography> */}
        <Box className="friend-list" display="flex" flexDirection="column" gap={2}>
          {People.map((friend, index) => (
            <Box sx={{ bgcolor: '#f0f0f0'}}
              key={index}
              className="friend-profile"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
              bgcolor="background.paper"
              borderRadius={2}
              boxShadow={1}
            >
              <Box display="flex" alignItems="center">
                <Avatar alt={friend.Name} src={friend.Avatar} />
                <Box ml={2}>
                  <Typography variant="h6" component="p">
                    {friend.Name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {friend.City}
                  </Typography>
                </Box>
              </Box>
              <IconButton color="primary" >
              <TiUserAdd className='FriendsAddIcon' />
                {/* <PersonAddIcon /> */}
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
    

        </div>

        



      </div>
    </>
  )
}

export default HomePage
