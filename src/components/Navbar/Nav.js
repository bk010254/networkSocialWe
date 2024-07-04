import React,{useState} from 'react';
import './Nav.css';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const Nav = () => {
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
  
    const toggleNotification = () => {
      setNotificationOpen(!notificationOpen);
      setProfileOpen(false);
    };
  
    const toggleProfile = () => {
      setProfileOpen(!profileOpen);
      setNotificationOpen(false);
    };
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <h1>MyApp</h1>
    </div>
    <div className="navbar-icons">
      <div className="navbar-icon-wrapper" onClick={toggleNotification}>
        <FaBell className="navbar-icon" />
        {notificationOpen && (
          <div className="navbar-dropdown">
            <ul>
              <li>Notification 1</li>
              <li>Notification 2</li>
              <li>Notification 3</li>
            </ul>
          </div>
        )}
      </div>
      <div className="navbar-icon-wrapper" onClick={toggleProfile}>
        <FaUserCircle className="navbar-icon" />
        {/* <IoMdArrowDropdown className="navbar-icon" /> */}
        {profileOpen && (
          <div className="navbar-dropdown">
            <ul>
              <li>Settings</li>
              <li>Update Profile</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  </nav>
  )
}

export default Nav
