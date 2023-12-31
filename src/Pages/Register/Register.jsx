import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import login from "../../assets/78126-secure-login.json";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, logOut, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleToRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    // console.log(name, email, password, photoUrl);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            icon: "success",
            title: "Welcome",
            text: "Sign up Successfully",
          });
        }
        // update user info from field data
        updateUserinfo(user, name, photoUrl);
        // console.log(user);

        // logOut function use for preventing auto login when someone sign up
        logOut()
          .then((result) => {})
          .catch((error) => console.log(error.message));

        // Redirect to home page after successfully user register
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: error.message,
        });
        console.error(error.message);
      });
  };
  //   update user information

  const updateUserinfo = (user, name, photoUrl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        // console.log("Updated Successfully");
      })
      .catch((error) => {
        // console.error(error.message);
      });
  };

  const handleToGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;

        if (user) {
          Swal.fire({
            icon: "success",
            title: "Welcome to Kid's Toy House!!!",
            text: "User has been log in successfully.",
          });
          navigate("/");
        }
        // navigate to home

        console.log(user);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops!!!",
          text: error?.message,
        });
      });
  };

  return (
    <div>
      <div className="lg:flex justify-between items-center px-8 my-16 container mx-auto">
        <div className="lg:w-1/2 mb-12 px-8">
          <Lottie animationData={login} loop={true}></Lottie>
        </div>
        <div className="card lg:w-1/2 shadow-2xl bg-base-100 mx-auto sm:px-8">
          <div className="card-body sm:px-16 sm:pt-16">
            <form onSubmit={handleToRegister}>
              <div className="text-center mb-10">
                <h1 className="text-5xl font-bold">Register</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input  border-[#f8ea69]"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
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
                  placeholder="Your password"
                  className="input  border-[#f8ea69]"
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Photo Url
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="Photo url"
                  className="input  border-[#f8ea69]"
                  name="photoUrl"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn bg-[#ff0018] border-none text-xl capitalize hover:bg-red-600"
                />
              </div>
            </form>
            <div className=" mx-auto text-center space-y-3">
              <h3 className="text-xl font-medium mt-3 ">Or Sign Up with</h3>

              <div className="flex justify-center gap-2">
                <span className="hover:bg-[#f8ea69] rounded-full p-2 cursor-pointer">
                  <FaGithub className=" text-2xl"></FaGithub>
                </span>
                <span
                  onClick={handleToGoogleSignIn}
                  className="hover:bg-[#f8ea69] rounded-full p-2 cursor-pointer"
                >
                  <FcGoogle className=" text-2xl"></FcGoogle>
                </span>
              </div>
              <p className="text-xl">
                Have an account?
                <Link to="/login" className="text-[#ff0018] font-medium">
                  {""} Log In
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

export default Register;
