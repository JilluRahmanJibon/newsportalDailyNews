import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const handelRegister = (data) => {
    login(data.email, data.password)
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
    <div>
      <h1 className="text-center text-3xl py-3 shadow-xl mb-3 font-bold italic ">
        <Link to="/">Daily News</Link>
      </h1>
      <div className="">
        <div className="bg-white rounded-md shadow-2xl py-12 w-96 mx-auto my-10">
          <form
            className=" flex flex-col gap-4 items-center justify-center "
            onSubmit={handleSubmit(handelRegister)}
          >
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

            <button className="btn p-2 w-80 rounded-none bg-black text-white font-bold hover:bg-gray-800">
              Login
            </button>
            <p className="text-gray-500 text-sm font-bold">
              Don't Have an Account ?
              <Link className="link" to="/register">
                Register
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
              Login With Google
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
