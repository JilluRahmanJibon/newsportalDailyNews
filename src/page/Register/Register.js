import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle, IconName } from "react-icons/fc";
import { HiChevronLeft } from "react-icons/hi2";
import { toast } from 'react-hot-toast';

const Register = () => {
    const [role, setRole] = useState(null);
    // console.log(role);

    // const { createUser } = useContext(AuthContext)

    const handleSingUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // createUser(name,email, password)
        //     .then(result => {
        //         const user = result.user;
        //         // console.log(user);
        //         toast.success('Your Register is Successful')
        //     })
        //     .catch(err => console.error(err))
    }


    return (
        <div className="">

            <div className='flex justify-center items-center  sm:w-1/4 w-11/12 mx-auto border shadow  '>

                <form onSubmit={handleSingUp} noValidate="" className=" sm:space-y-8 space-y-5 py-6 px-6 ng-untouched ng-pristine ng-valid w-full">
                    <div className='flex items-center '>
                        <HiChevronLeft className='font-bold text-xl'></HiChevronLeft>
                        <Link><h4 className='text-lg'>Back</h4></Link>
                    </div>
                    <div className='text-center '>
                        <h2 className='text-2xl p-4 font-semibold text-blue-700'>Create an account</h2>
                        <h4>to continue to <span className='font-semibold'>News Portal Daily News</span></h4>
                    </div>
                    <div>

                        <button className=" flex justify-center items-center gap-4 w-full p-3 sm:text-lg text-sm font-semibold tracking-wide uppercase rounded  text-white bg-gradient-to-r from-sky-500 to-indigo-500"> <FcGoogle className='text-3xl '></FcGoogle> Continue With Google</button>
                    </div>
                    <div className="divider">OR</div>
                    {/*------------------------------------------Authentication part-----------------------------*/}
                    <div className=''>
                        <input name='name' id="name" type="name" className="w-full p-3 border border-gray-400 rounded-md   " placeholder="Full Name" required />
                    </div>
                    <div className=''>
                        <input name='email' id="email" type="email" className="w-full p-3 border border-gray-400 rounded-md   " placeholder="Email" required />
                    </div>
                    <div className=''>
                        <input name='password' id="password" type="password" className="w-full p-3 border border-gray-400 rounded-md  " placeholder="Password" required />
                    </div>
                    <div>
                        <div className="flex mb-3 ">
                            <input
                                type="radio"
                                name="radio-5"
                                id="user"
                                className="radio radio-success mr-2"
                                onChange={() => setRole("user")}
                                required
                            />
                            I am a user
                        </div>
                        <div className="flex">
                            <input
                                type="radio"
                                name="radio-5"
                                id="host"
                                className="radio radio-success mr-2"
                                onChange={() => setRole("publisher")}
                                required
                            />
                            I am a publisher
                        </div>
                    </div>

                    <div className=''>
                        <button type="submit" className="w-full p-3  text-xl font-bold tracking-wide uppercase rounded bg-gradient-to-r bg-red-600">Register </button>
                    </div>
                    <div className='text-center  '>
                        <h2 className='text-center'>Already a Member? <span className='text-red-600 font-bold'> <Link to='/login'>Login</Link></span></h2>
                    </div>
                </form>

            </div>

        </div>


    );
};

export default Register;