import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const active=({ isActive, isPending,isTransitioning }) =>[
    isPending ? "pending" : "",
    isActive ? "active" : "",
    isTransitioning ? "transitioning" : "",
].join(" ")
  
const Navbar = () => {
  const {user,signOutUser,success,setSuccess,errors,setErrors}=useContext(AuthContext);
  console.log(user);
    const navIteam=<>
  <li className="px-2"><NavLink  to='/' className={active}>Home</NavLink></li>
  <li className="px-2"><NavLink  to='/update' className={active} >Update Profile</NavLink></li>
  <li className="px-2"><NavLink  to='/user' className={active} >User Profile</NavLink></li>
      </>


const handleSignOut=()=>{
  signOutUser()
  .then(() => {
    // Sign-out successful.
    setSuccess(toast.success('Sign out successfully'));
  }).catch((error) => {
    // An error happened.
    setErrors(toast.error(error.message));
  })
}
// jita@mailinator.com

    return (
        <div data-aos="fade-left" data-aos-duration="7000"  className="navbar ">
          <ToastContainer />
  <div className="navbar-start">
    <div  className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navIteam}
      </ul>
    </div>
    <img src="https://i.ibb.co/Cs8SNNt/Hamilton-Real-Estate.png"  alt='logo' className="w-16 h-16  text-xl hover:bg-sky-700"/>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navIteam}
    </ul>
  </div>
  {/* howtolearn1108@gmail.com */}
  <div className="navbar-end">
    {/* dropdown */}
   {
    user? <div className="dropdown dropdown-bottom dropdown-end flex items-center gap-2 ">
      <button onClick={handleSignOut} className="btn btn-neutral">Logout</button>
    <div tabIndex={0} role="button" className=" btn  btn-circle avatar">
     
      <div className="myDIV w-96 rounded-full" >
        {
          user &&<>
          <img alt="Tailwind CSS Navbar component " className="tooltip"
         src={user.
            photoURL} />
            
          </> 
        }
       
       
      </div>
     
    </div>
   
  </div>:<Link to="/login" className="btn btn-ghost">Login</Link>
   }
        {/* dropdown */}

        
  </div>
</div>
    );
};

export default Navbar;