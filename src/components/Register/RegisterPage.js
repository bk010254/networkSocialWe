import React, {useState} from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import GetData from '../../DummPro/GetData';





const RegisterPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
   
    navigate('/login');
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

   

  return (
   <>
    <div className="text-center mt-24">
      <div className="flex items-center justify-center">
        {/* <div className='BrandLogo'>

        <h3>Connectopia</h3>
        </div> */}
        {/* <svg fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-blue-500" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg> */}
      </div>
      <h2 className="text-4xl tracking-tight">
        Sign up for an account
      </h2>
      <span className="text-sm">or <a href="#" className="text-blue-500" onClick={handleClick}>sign in to your account</a></span>
    </div>
    <div className="flex justify-center my-2 mx-4 md:mx-0">
      <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='firstName'>First Name</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='text' required placeholder='Enter Your First Name'/>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='lastName'>Last Name</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='text' required placeholder='Enter Your Last Name'/>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='location'>Location</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='text' required placeholder='Enter Your Location'/>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='occupation'>Occupation</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='text' required placeholder='Enter Your Occupation'/>
          </div>
          <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='AddPicture'>Add Picture</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='file' required />
          </div>
          <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='Email'>Email address</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='email' required  placeholder='Enter Your Email Address'/>
          </div>
          <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='Password'>Password</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' required placeholder='Enter Your Password'/> 
          </div>
          <div className="w-full flex items-center justify-between px-3 mb-3 ">
            <label htmlFor="remember" className="flex items-center w-1/2">
              <input type="checkbox" name="" id="" className="mr-1 bg-white shadow" />
              <span className="text-sm text-gray-700 pt-1">Remember Me</span>
            </label>
            <div className="w-1/2 text-right">
              <a href="#" className="text-blue-500 text-sm tracking-tight">Forget your password?</a>
            </div>
          </div>
          <div className="w-full md:w-full px-3 mb-6">
            <button className="appearance-none block w-full bg-orange-500 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Sign up</button>
          </div>
        </div>
      </form>
    </div>
    <GetData />
   </>
  )
}

export default RegisterPage
