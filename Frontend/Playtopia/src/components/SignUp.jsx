import { useState } from "react";
import {Link} from 'react-router-dom'

import "../Styles/SignUp.css";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset the form fields after submission if needed
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#0c1647]">
      <div style={{ boxShadow: "0px 0px 0px #bebebe",
                    boxShadow: "0px 0px 30px #7c05f2" }} 
            className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">

        {/* uncomment this for image  */}

        {/* <div className="hidden bg-cover bg-no-repeat lg:block lg:w-1/2" style={{ backgroundImage: 'url("/public/jet.jpg")' }} /> */}

        {/* Uncomment this for video background */}
        <div className="hidden lg:block lg:w-1/2">
          <img src="/valoWallpaper.jpg" className="object-cover w-full h-full"/>
        </div>
        <form
          className="w-full px-6 py-8 md:px-8 lg:w-1/2"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center mx-auto">
            <img src="/Playtopia-Logo-PNG-2.svg" className="h-24"/>
          </div>
          <p className="welcome mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome
          </p>
          <a
            href="#"
            className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="px-4 py-2">
              <img src="/public/google.svg" className="h-6" alt="" />
            </div>
            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </a>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
            <p
              
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400"
            >
              or login with email
            </p>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="loggingPassword"
              >
                Password
              </label>

              {/* TODO: Make a forgot password page and handle that with backend and connect the route */}
              <Link to={'/forgotPassword'}>
              <a
                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >
                Forget Password?
              </a>
              </Link>
            </div>
            <input
              id="loggingPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center items-center px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            <Link to={'/logIn'}>
            <a
              className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
            >
              Already have an account? Log in
              {/* Don&apos;t have an account yet ? */}
            </a>
            </Link>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
