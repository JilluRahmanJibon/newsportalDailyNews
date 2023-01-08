import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { HiChevronLeft } from "react-icons/hi2";
<<<<<<< HEAD
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {
  const [role, setRole] = useState(null);
  // console.log(role);
=======
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
    const [role, setRole] = useState(null);

    useTitle('Register-page')

    // console.log(role);
>>>>>>> main

  const { createUser, googleLogin } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const handelRegister = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Registration Successfully Done!");
        reset();
      })
      .then((err) => console.error(err));
  };

<<<<<<< HEAD
  const handelGoogleRegister = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="">
      <h1 className="text-center text-3xl py-3 shadow-md mb-3 font-bold italic ">
        <Link to="/">Daily News</Link>
      </h1>
      <div className="bg-white rounded-md shadow-2xl py-12 w-96 mx-auto my-10">
        <form
          className=" flex flex-col gap-4 items-center justify-center "
          onSubmit={handleSubmit(handelRegister)}
        >
          <input
            className="border bg-white text-gray-600 border-black p-2 w-80"
            {...register("name", { required: "Name is Required" })}
            placeholder="name"
          />
          <input
            className="border bg-white text-gray-600 border-black p-2 w-80"
            {...register("email", { required: "Email is Required" })}
            placeholder="email"
          />
=======
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
            <h1 className='text-center text-3xl py-3 shadow-xl mb-3 font-bold italic '><Link to='/'>Daily News</Link></h1>
            <div className='flex justify-center items-center  xl:w-1/3 md:w-1/2 w-11/12 mx-auto border shadow '>

                <form onSubmit={handleSingUp} noValidate="" className=" sm:space-y-8 space-y-5 pt-3 pb-5 px-6 ng-untouched ng-pristine ng-valid w-full">

                    <div className='text-center '>
                        <h2 className='text-2xl font-semibold text-blue-700'>Create an account</h2>
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
>>>>>>> main

          <input
            className="border bg-white text-gray-600 border-black p-2 w-80"
            {...register("password", { required: "Password is Required" })}
            placeholder="password"
          />
          <div>
            <div className="flex mb-3 ">
              <input
                type="radio"
                name="radio-5"
                id="user"
                className="radio  mr-2"
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
                className="radio  mr-2"
                onChange={() => setRole("publisher")}
                required
              />
              I am a publisher
            </div>
          </div>
          <button className="btn p-2 w-80 rounded-none bg-black text-white font-bold hover:bg-gray-800">
            Register
          </button>
          <p className="text-gray-500 text-sm font-bold">
            Already Have an Account ?
            <Link className="link" to="/login">
              Login
            </Link>
          </p>
        </form>
        <div className="divider text-gray-600">OR</div>
        <div className="text-center">
          <button
            onClick={handelGoogleRegister}
            className="btn rounded-none p-2 w-80 bg-black text-white font-bold hover:bg-gray-800"
          >
            Register With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
