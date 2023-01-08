import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import useToken from "../../Hooks/useToken";
import axios from "axios";

const Register = () => {
  const { createUser, userProfileUpdate, googleLogin, setLoading } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [signUpUserEmail, setSignUpUserEmail] = useState('');
  const [token] = useToken(signUpUserEmail)
  const [firebaseError, setFirebaseError] = useState('');

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  if (token) {
    setLoading(false);
    navigate(from, { replace: true });
  }

  const { register, handleSubmit, reset } = useForm();

  const handelRegister = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        userProfileUpdate(data.name);
        const user = result.user;
        axios.post(`${process.env.REACT_APP_ApiUrl}users`, {
          email: user?.email,
          password: data.password,
          role: role,
          name: data.name,

        }).then(res => {
          if (res.data.acknowledged) {
            setSignUpUserEmail(user?.email)
            toast.success('Account Created Successful', { duration: 1500 })
            reset()
          }
        }).catch(err => {
          console.log(err);
          setFirebaseError(err.message)
          setLoading(false)
        })
      })
      .catch((err) => {
        setFirebaseError(err.message)
        setLoading(false)
      });
    setFirebaseError('')
  };

  const handelGoogleRegister = () => {
    googleLogin()
      .then(result => {
        const user = result.user;
        axios.post(`${process.env.REACT_APP_ApiUrl}users`, {
          role: 'reader',
          email: user?.email,
          name: user?.displayName,
        }).then(res => {
          if (res.data.acknowledged) {
            setSignUpUserEmail(user?.email)
            toast.success('Sign in Account Successfully', { duration: 1500 })
          }
        }).catch(err => {
          console.log(err);
          setFirebaseError(err.message)
          setLoading(false)
        })
      })
      .catch((err) => {
        setFirebaseError(err.message)
        setLoading(false)
      });
    setFirebaseError('')
  };
 
  


  return (
    <div className="">
      <h1 className="text-center text-3xl py-3 shadow-md mb-3 font-bold italic ">
        <Link to="/">Daily News</Link>
      </h1>
      <div className="bg-white rounded-md shadow-2xl pb-12 pt-3 w-96 mx-auto my-10">
        <div className="pb-6">
          {firebaseError && (
            <p className=" text-center text-red-400 font-semibold">{firebaseError.replaceAll('Firebase:', ' ').replaceAll('Error', " Error:").replaceAll('(auth/', ' ').replaceAll('email', 'Email').replaceAll(')', '')}</p>
          )}
        </div>
        <form
          className=" flex flex-col gap-4 items-center justify-center "
          onSubmit={handleSubmit(handelRegister)}
        >
          <input required type='text'
            className="border bg-white text-gray-600 border-black p-2 w-80"
            {...register("name", { required: "Name is Required" })}
            placeholder="Enter your name"
          />
          <input required type='email'
            className="border bg-white text-gray-600 border-black p-2 w-80"
            {...register("email", { required: "Email is Required" })}
            placeholder="Enter your email"
          />

          <input required type='password'
            className="border bg-white text-gray-600 border-black p-2 w-80"
            {...register("password", { required: "Password is Required" })}
            placeholder="Enter your password"
          />
          <div>
            <div className="flex mb-3 ">
              <input
                type="radio"
                name="radio-5"
                id="user"
                className="radio  mr-2"
                onChange={() => setRole("reader")}
                required
              />
              I am a reader
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
          <button disabled={!role} className="btn p-2 w-80 rounded-none bg-black text-white font-bold hover:bg-gray-800">
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
            <FcGoogle className="text-xl mr-1" />
            Register With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
