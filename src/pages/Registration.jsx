import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {  toast } from 'react-toastify';
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registration = () => {


  const { createUser, signOutUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  // const location = useLocation();
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;

    if (!emailValidate.test(email)) {
      toast("Invalid email address");
      return;
    }

    if (password.length < 6) {
      toast("Password must be at least 6 characters");
      return;
    }

    if (!passwordValidate.test(password)) {
      toast(
        "Password must contain at least one Uppercase and one Lowercase letter and one number."
      );
      return;
    }
    // console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((request) => {
        const user = request.user;
        updateProfile(user, { displayName: name, photoURL: photoURL }).then(
          () => {
            // console.log("Display name set successfully");
          }
        );
        // console.log(request.user);
        toast("Registered Successfully");
        signOutUser();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        // const errorMessage = error.message;
        const errorCode = error.code;
        toast(errorCode);
      });
  };




  return (
    <div className="flex min-h-[calc(100vh-339px)] items-center justify-center">
      <div className="w-full  max-w-md p-8 space-y-3 rounded-xl ">
        <h1 className="text-2xl font-bold text-center">Create your Account</h1>
        <form onSubmit={handleSignUp} noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="username"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              Your Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              placeholder="Your Photo URL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="relative  space-y-1 text-sm">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
             type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
             <div
                className="absolute text-black right-3 top-9"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
            Register
          </button>
        </form>

        <p className="text-xs text-center sm:px-6">
          Already have an account?
          <Link
            to={"/login"}
            rel="noopener noreferrer"
            href="#"
            className="underline text-blue-400 "
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
