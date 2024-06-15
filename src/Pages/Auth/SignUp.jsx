import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {  updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const SignUp = () => {
    const {createUser,success,setSuccess,errors,setErrors}=useContext(AuthContext);
    const [accept,setAccept]=useState(false);
    const [show,setShow]=useState(false)
    const navigate = useNavigate();

    const handleSignUp=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const name=e.target.name.value;
        const url=e.target.url.value;
        const terms=e.target.terms.checked
        setAccept(terms)
        console.log({email,password});
// reset
setSuccess('');
setErrors('');


// password validation
if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)){
    setErrors(('At least 8 characters long, includes at least one uppercase letter, one lowercase letter, one number, and one special character.'))
    return
}
 if(!accept){
    setErrors(('please accept our terms and condition'))
    return
}
    // firebase user create
        createUser(email,password)
        .then((result)=>{
            const user=result.user;
console.log(user);
            // Send a user a verification email
           
  //           sendEmailVerification(result.user)
  // .then(() => {
  //   // Email verification sent!
  // setErrors(toast.warn('Email verification sent!,check inbox'))
  // });
         
            updateProfile(result.user,{
                displayName:name,
                photoURL:url

            })
            setSuccess(toast.success('user create successfully'))
            e.target.reset()
            navigate('/')
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message
            setErrors(toast.warn(errorMessage))
        })
    }
    return (
        <div className='grid justify-center'>
            <ToastContainer />
           <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
		<p className="text-sm text-gray-600">Sign Up to access your account</p>
	</div>
	<form onSubmit={handleSignUp} noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
            {/* name */}
        <div>
				<div className="flex justify-between mb-2">
                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                </div>
				<input type="text" name="name" id="name" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
			</div>
            {/* url */}
        <div>
				<div className="flex justify-between mb-2">
                <label htmlFor="url" className="block mb-2 text-sm">Photo Url</label>
                </div>
				<input type="text" name="url" id="url" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                </div>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</a>
				</div>
        {/* password */}
				<input type={show?"text":"password"} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
        <span className=" absolute mt-3 -ml-8" onClick={()=>setShow(!show)}>{show?<FaEye />:<FaEyeSlash />}</span>
			</div>
		</div>
		<div className="space-y-2">
            <br />
            <div className="flex justify-start items-center mb-2">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms" className="block mb-2 text-sm"><NavLink to='/terms'>Terms and Conditions</NavLink></label>
                </div>
            <br />
			<div>
    
            {
                errors && <p className="text-xl text-red-500">{errors}</p>
            }
				<button  className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50 mt-5">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?
				<Link to='/login' rel="noopener noreferrer"  className="hover:underline text-violet-600">Login</Link>.
			</p>
           
		</div>
	</form>
</div> 
        </div>
    );
};

export default SignUp;