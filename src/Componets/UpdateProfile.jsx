import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../Firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
    const handleUserupdate=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const url=e.target.url.value;

       updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:url
        })
   }
    return (
        <div className="grid justify-center">
             <Helmet>
        <title>Hamilton Real Estate | Upadate Profile</title>
            </Helmet>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
            <form onClick={handleUserupdate}  noValidate="" action="" className="space-y-12">
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
			
			
		</div>
		<div className="space-y-2">
            
			<div>
    
            {/* {
                errors && <p className="text-xl text-red-500">{errors}</p>
            } */}
				<button type="submit"  className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50 mt-5">Update</button>
			</div>
			
           
		</div>
	</form>
        </div>
        </div>
    );
};

export default UpdateProfile;