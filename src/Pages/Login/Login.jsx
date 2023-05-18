import Lottie from "lottie-react";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import login from "../../assets/78126-secure-login.json";
const Login = () => {
  return (
    <div>
      <div className="lg:flex justify-between items-center px-8 my-16 container mx-auto">
        <div className="lg:w-1/2 mb-12 px-8">
          <Lottie animationData={login} loop={true}></Lottie>
        </div>
        <div className="card lg:w-1/2 shadow-2xl bg-base-100 mx-auto sm:px-8">
          <div className="card-body sm:px-16 sm:pt-16">
            <form>
              <div className="text-center mb-10">
                <h1 className="text-5xl font-bold">Login</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input  border-[#f8ea69]"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input  border-[#f8ea69]"
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign In"
                  className="btn bg-[#ff0018] border-none text-xl capitalize hover:bg-red-600"
                />
              </div>
            </form>
            <div className=" mx-auto text-center space-y-3">
              <h3 className="text-xl font-medium mt-3 ">Or Sign In with</h3>

              <div className="flex justify-center gap-4">
                <span className="hover:bg-[#f8ea69] rounded-full p-3 cursor-pointer">
                  <FaFacebookF className="text-sky-600 text-xl"></FaFacebookF>
                </span>
                <span className="hover:bg-[#f8ea69] rounded-full p-3 cursor-pointer">
                  <FcGoogle className=" text-xl"></FcGoogle>
                </span>
              </div>
              <p className="text-xl">
                New on Kid's Toy House?
                <Link to="/signup" className="text-[#ff0018] font-medium">
                  {""} Sign Up
                </Link>
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
