import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()

    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        setConfirm(event.target.value)
    }
    const handleCreateWithEmail = event => {
        event.preventDefault()
        if (password !== confirm) {
            setError('password did not match')

        }

        createUserWithEmailAndPassword(email, password
        )
        if (user) {
            navigate('/')
        }


    }


    return (
        <div className=' w-[360px] md:w-[400px] mx-auto text-lg text-center shadow-lg rounded-lg py-12 my-10 bg-white flex flex-col gap-6 '>
            <p className=' text-2xl font-bold text-gray-600'>Join Ema-John</p>
            <form onSubmit={handleCreateWithEmail} className='flex flex-col  gap-6'>
                <input
                    onBlur={handleEmail}
                    type="email"
                    name="email"
                    id="" placeholder='Enter email'
                    className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto border-orange-400'
                    required
                />
                <input
                    onBlur={handlePassword}
                    type="password"
                    name="password"
                    id="" placeholder='Create password'
                    className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto border-orange-400'
                    required
                />
                <input
                    onBlur={handleConfirmPassword}
                    type="password"
                    name="password"
                    id="" placeholder='Confirm password'
                    className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto border-orange-400'
                    required
                />
                <p className='text-left ml-6 text-red-600'>{error}</p>
                <button

                    type="submit"
                    className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto hover: border-orange-400 bg-orange-400 text-white font-bold'
                >
                    Sign up
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
                Join with Google</button>
            <p>
                Haven't a account?<Link className=' underline hover:text-orange-400' to='/login'>Login</Link>
            </p>

        </div>
    );
};

export default SignUp;