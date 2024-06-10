import { NavLink } from "react-router-dom";

const active=({ isActive, isPending,isTransitioning }) =>[
    isPending ? "pending" : "",
    isActive ? "active" : "",
    isTransitioning ? "transitioning" : "",
].join(" ")
  
const Navbar = () => {
    const navIteam=<>
  <li className="px-2"><NavLink  to='/' className={active}>Home</NavLink></li>
  <li className="px-2"><NavLink  to='/signIn' className={active} >Update Profile</NavLink></li>
  <li className="px-2"><NavLink  to='/signUp' className={active} >User Profile</NavLink></li>
  
   
   
  
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navIteam}
      </ul>
    </div>
    <img src="https://i.ibb.co/Cs8SNNt/Hamilton-Real-Estate.png"  alt='logo' className="w-16 h-16  text-xl"/>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navIteam}
    </ul>
  </div>
  
  <div className="navbar-end">
    {/* dropdown */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
           User  Profile
            {/* <span className="badge">New</span> */}
          </a>
        </li>
        <li><a>Update  Profile</a></li>
        <li><a>Logout</a></li>
      </ul>
      </div>
        {/* dropdown */}
  </div>
</div>
    );
};

export default Navbar;