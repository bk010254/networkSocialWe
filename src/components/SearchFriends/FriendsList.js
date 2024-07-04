import React,{useState} from 'react';
import { TiUserAdd } from 'react-icons/ti';
import {
  Container,
  Box,
  Typography,
  Avatar,
  IconButton,
  TextField
} from '@mui/material';
import './Friends.css'


const People = [
    {
      Avatar: 'path/to/avatar1.jpg',
      Name: 'John Doe',
      City: 'New York',
    },
    {
      Avatar: 'path/to/avatar2.jpg',
      Name: 'Jane Smith',
      City: 'Los Angeles',
    },
    // Add more friends as needed
  ];

const FriendsList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFriends, setFilteredFriends] = useState(People);
  
    const handleSearch = (e) => {
      const query = e.target.value.toLowerCase();
      setSearchQuery(query);
      const filtered = People.filter((friend) =>
        friend.Name.toLowerCase().includes(query)
      );
      setFilteredFriends(filtered);
    };
  
  return (
    <div>
       <Container>
      <Box className="friend-list-container" mt={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Friends
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search friends..."
          value={searchQuery}
          onChange={handleSearch}
          margin="normal"
        />
        <Box className="friend-list" display="flex" flexDirection="column" gap={2}>
          {filteredFriends.map((friend, index) => (
            <Box
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
              <IconButton color="primary">
                <TiUserAdd className="FriendsAddIcon" />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
    </div>
  )
}

export default FriendsList
