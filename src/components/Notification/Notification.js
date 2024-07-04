import React from 'react';
import './Notification.css';
import { BiSolidMessageRoundedDetail } from "react-icons/bi";



const Notification = () => {
  return (
    <div className="flex flex-wrap justify-center mt-24">
      <h6>Notification</h6>
      <BiSolidMessageRoundedDetail  className='MessageIcon'/>
     
    </div>
  )
}

export default Notification
