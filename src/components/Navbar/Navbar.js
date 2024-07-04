import React, { useState } from 'react';
import { AiOutlineMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal'
import { BsChatDotsFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import BrandLogo from '../Imgages/newT.jpg';
import Aksh from '../Imgages/Akshay.jpg';
import { Fragment } from 'react';
import '../Styles/Style.css'
import PopupModal from '../Modal/PopupModal';
import { useNavigate } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux';


import './Navbar.css'; // Import the CSS file
import ToggleButtom from '../Toggle/ToggleButtom';


const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const theme = useSelector(state => state.theme.theme);
  const navigate = useNavigate();
  const navigation = [
    // { name: 'Dashboard', href: '#', current: true },
    // { name: 'Team', href: '#', current: false },
    // { name: 'Projects', href: '#', current: false },
    // { name: 'Calendar', href: '#', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const handleNotification = () => {
    navigate('/notification')
  }
  const handleHome = () => {
    navigate('/')
  }

  const handleLogOut = () => {
    setShowPopup(true);
  }

  const handleConfirmLogout = () => {
    setShowPopup(false);
    navigate('/login')
    // Add your logout logic here, e.g., clearing user data, redirecting, etc.
    console.log('Logged out');
  };

  const handleCancelLogout = () => {
    setShowPopup(false);
  };


  return (
    <>

      <Disclosure as="nav" className="Navbarcolor">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" style={{color:'red'}}/>
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" style={{color:'white'}} />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    {/* <img src={BrandLogo} className='MainLogoBrand' onClick={handleHome} /> */}
                    <h3 className='nameLogo' onClick={handleHome}>Talk<span className='nameLogo1'>Fusion</span></h3>
                    {/* <h4>fdbd</h4> */}
                    {/* <h3 onClick={handleHome} >Communi<span>Link</span></h3> */}
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full "
                    onClick={handleNotification}>
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BsChatDotsFill className="h-12 w-8 text-cyan-800" aria-hidden="true" />
                   
                  </button>

                 







                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <FaUser size={20} />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              onClick={handleLogOut} >
                              Log out
                            </a>

                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Are you sure you want to logout?</h2>
            <button onClick={handleConfirmLogout} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Yes
            </button>

            <button  onClick={handleCancelLogout} class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
              No
            </button>

            {/* <button className='NoButton' onClick={handleCancelLogout}>Cancel</button> */}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
