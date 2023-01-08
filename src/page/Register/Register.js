import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  // console.log(role);


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
            placeholder="Enter your name"
          />
          <input
            className="border bg-white text-gray-600 border-black p-2 w-80"
            {...register("email", { required: "Email is Required" })}
            placeholder="Enter your email"
          />

          <input
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
            <FcGoogle className="text-xl mr-1" />
            Register With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
