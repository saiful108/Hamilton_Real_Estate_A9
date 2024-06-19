import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";


const SocialAuth = () => {
	return (
		<div className="grid justify-center mt-5">
			<ul className="flex gap-4 justify-content-center">
                            <li>
                                                                    
                                        <FaFacebook className="text-xl hover:text-blue-600 transition duration-300" />
                            </li>
                            <li>
                                                                    
                                        <FaGoogle className="text-xl hover:text-blue-600 transition duration-300" />
                            </li>
                            <li>
                            <FaTwitter className="text-xl hover:text-blue-600 transition duration-300" />
                            </li>
                           
                            <li>
                            <FaLinkedinIn className="text-xl hover:text-blue-600 transition duration-300" />
                            </li>
                            <li>
                            <FaGithub className="text-xl hover:text-blue-600 transition duration-300" />
                            </li>
                        </ul>
		</div>
	);
};

export default SocialAuth;