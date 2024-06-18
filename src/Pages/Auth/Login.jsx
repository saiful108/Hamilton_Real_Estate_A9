import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser, success, setSuccess, errors, setErrors } =
    useContext(AuthContext);
    const [show,setShow]=useState(false)
  const navigate = useNavigate();
  const location=useLocation();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log({ user });
        setSuccess(toast.success("login successfully"));
        e.target.reset();
      //  navigate(location?.state ? location.state : '/');
       navigate(location?.state?.from? location.state.from : '/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        setErrors(toast.error(errorMessage));
      });
  };
  return (
    <div className="grid justify-center">
      <ToastContainer />
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSignIn}
          noValidate=""
          action=""
          className="space-y-12"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type={show?"text":"password"}
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
              <span className=" absolute mt-3 -ml-8" onClick={()=>setShow(!show)}>{show?<FaEye />:<FaEyeSlash />}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button className="btn w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50">
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Don't have an account yet?
              <Link
                to="/signUp"
                rel="noopener noreferrer"
                className="hover:underline text-violet-600"
              >
                Sign up
              </Link>
              
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
