import React from 'react';

import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <div className=' w-[360px] md:w-[400px] mx-auto text-lg text-center shadow-lg rounded-lg py-12 my-10 bg-white flex flex-col gap-6 '>
            <p className=' text-2xl font-bold text-gray-600'>Login Website</p>
            <form className='flex flex-col  gap-6'>
                <input
                    type="email"
                    name="email"
                    id="" placeholder='Enter email'
                    className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto border-orange-400'
                />
                <input
                    type="password"
                    name="password"
                    id="" placeholder='Enter password'
                    className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto border-orange-400'
                />
                <button
                    type="submit"
                    className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto hover: border-orange-400 bg-orange-400 text-white font-bold'
                >
                    Log in
                </button>
            </form>
            <div className="flex justify-evenly space-x-2 w-64 mt-4 mx-auto">
                <span
                    className="bg-gray-300 h-px flex-grow t-2 relative top-2">
                </span>
                <span
                    className="flex-none uppercase text-xs text-gray-400 font-semibold">or
                </span>
                <span
                    className="bg-gray-300 h-px flex-grow t-2 relative top-2">

                </span>
            </div>
            <button

                className='flex items-center border-2 py-2 w-[350px] mx-auto rounded-md pl-6 gap-8'>
                <img
                    className='w-5' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                Login with Google</button>
            <p>
                Already a member?<Link className=' underline hover:text-orange-400' to='/signup'>Sign up</Link>
            </p>

        </div>
    );
};

export default Login;