import React from 'react'

const Password = () => {
    return (
        <>

            <div className="flex justify-center my-2 mx-4 md:mx-0">
                <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 mt-40">
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='Password'>Email address</label>
                            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='email' required placeholder='Enter Your Email Address' />
                        </div>


                       
                            <button className="appearance-none block w-full bg-orange-500 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Send OTP</button>
                       
                    </div>
                </form>
            </div>
        </>
    )
}

export default Password
