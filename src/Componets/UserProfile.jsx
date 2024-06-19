
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UserProfile = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    return (
        <div className='grid justify-center py-4'>
             <Helmet>
        <title>Hamilton Real Estate | User Profile</title>
            </Helmet>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure>
    
       {
        user && <img className='py-4' src={user.photoURL} alt="Shoes" />
       }
    
  </figure>
  <div className="card-body">
   {
        user?<h2 className="card-title">{user.displayName}</h2>:<h2 className="card-title">User Not Found</h2>
   }
    {
        user?<p className='font-medium'> {user.email}</p>:<p className='font-medium'>User Not Found</p>
    }
  
  </div>
</div>
        </div>
    );
};

export default UserProfile;