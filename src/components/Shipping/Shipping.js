import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <div className=' w-[360px] md:w-[400px] mx-auto text-lg text-center shadow-lg rounded-lg py-12 my-10 bg-white flex flex-col gap-6 '>
                <p className=' text-2xl font-bold text-gray-600'>Shipping Information</p>
                <form
                    className='flex flex-col  gap-6'>
                    <input

                        type="text"
                        name="name"
                        id="" placeholder='Your Name'
                        className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto border-orange-400'
                        required
                    />
                    <input

                        type="email"
                        name="email"
                        value={user?.email}
                        readOnly
                        id="" placeholder='Your email'
                        className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto border-orange-400'
                        required
                    />
                    <input

                        type="text"
                        name="address"
                        id="" placeholder='Your address'
                        className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto border-orange-400'
                        required
                    />
                    <input

                        type="text"
                        name="phone"
                        id="" placeholder='Your phone number'
                        className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto border-orange-400'
                        required
                    />

                    <button
                        type="submit"
                        className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto hover: border-orange-400 bg-orange-400 text-white font-bold'
                    >
                        Proceed to Shipping
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Shipping;