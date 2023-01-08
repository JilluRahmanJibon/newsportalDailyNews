import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle, IconName } from "react-icons/fc";
import { HiChevronLeft } from "react-icons/hi2";
import useTitle from '../../Hooks/useTitle';

const Login = () => {
useTitle('Login-page')

    return (
        <div>
            <h1 className='text-center text-3xl py-3 shadow-xl mb-3 font-bold italic '><Link to='/'>Daily News</Link></h1>
            <div className='flex justify-center items-center  xl:w-1/3 md:w-1/2 w-11/12 mx-auto border shadow '>
                <form noValidate="" className=" sm:space-y-8 pb-5 pt-2   px-6 ng-untouched ng-pristine ng-valid w-full">
                    <div className='text-center '>
                        <h2 className='text-2xl font-semibold text-blue-700'>login</h2>
                        <h4>to continue to <span className='font-semibold'>News Portal Daily News</span></h4>
                    </div>
                    <div>

                        <button className=" flex justify-center items-center gap-4 w-full p-3 sm:text-lg text-sm font-semibold tracking-wide uppercase rounded bg-gradient-to-r from-sky-500 to-indigo-500"> <FcGoogle className='text-3xl '></FcGoogle> Continue With Google</button>
                    </div>
                    <div className="divider">OR</div>
                    {/* ---------------------------------------------Authentication part---------------------------------------- */}
                    <div className=''>
                        <input name='email' id="email" type="email" className="w-full p-3 border border-gray-400 rounded-md   " placeholder="Email" required />
                    </div>
                    <div className=''>
                        <input name='email' id="email" type="email" className="w-full p-3 border border-gray-400 rounded-md   " placeholder="Email" required />
                    </div>
                    <div className=''>
                        <input name='password' id="password" type="password" className="w-full p-3 border border-gray-400 rounded-md  " placeholder="Password" required />
                    </div>
                    <div className=''>
                        <button type="submit" className="w-full p-3  text-xl font-bold tracking-wide uppercase rounded bg-gradient-to-r bg-red-600">login</button>
                    </div>
                    <div className='text-center font-semibold '>
                        <h4 className='text-blue-600' >Forgot password</h4>
                        <h2 className='text-center'>New to News Portal Daily News? <span className='text-red-600 text-lg font-semibold'> <Link to='/register'>Create an Account</Link></span></h2>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Login;