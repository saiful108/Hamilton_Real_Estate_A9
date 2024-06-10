import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <section className="ezy__copyright9 light py-12 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="flex items-center justify-center mb-6">
                            <div>
                               
                                     <img src="https://i.ibb.co/Cs8SNNt/Hamilton-Real-Estate.png"  alt='logo' className="w-16 h-16"/>
                            </div>
                            <div>
                                <p className="pl-3">&#169; Copyright all rights reserved</p>
                            </div>
                        </div>
                        <p className="opacity-75 mb-6">
                        Discover your dream home with Hamilton Real Estate. Specializing in residential properties, we offer personalized service and expert guidance to help you find the perfect place to call home. Explore our listings and let us turn your homeownership dreams into reality.
                        </p>
                        {/* <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Getting started</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Installation</a>
				<a rel="noopener noreferrer" href="#">Release Notes</a>
				<a rel="noopener noreferrer" href="#">Upgrade Guide</a>
				<a rel="noopener noreferrer" href="#">Using with Preprocessors</a>
				<a rel="noopener noreferrer" href="#">Optimizing for Production</a>
				<a rel="noopener noreferrer" href="#">Browser Support</a>
				<a rel="noopener noreferrer" href="#">IntelliSense</a>
			</div>
		</div>


        <div className="flex flex-col space-y-4">
			<h2 className="font-medium">Core Concepts</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Utility-First</a>
				<a rel="noopener noreferrer" href="#">Responsive Design</a>
				<a rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</a>
				<a rel="noopener noreferrer" href="#">Dark Mode</a>
				<a rel="noopener noreferrer" href="#">Adding Base Styles</a>
				<a rel="noopener noreferrer" href="#">Extracting Components</a>
				<a rel="noopener noreferrer" href="#">Adding New Utilities</a>
			</div>
		</div>

        <div className="flex flex-col space-y-4">
			<h2 className="font-medium">Core Concepts</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Utility-First</a>
				<a rel="noopener noreferrer" href="#">Responsive Design</a>
				<a rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</a>
				<a rel="noopener noreferrer" href="#">Dark Mode</a>
				<a rel="noopener noreferrer" href="#">Adding Base Styles</a>
				<a rel="noopener noreferrer" href="#">Extracting Components</a>
				<a rel="noopener noreferrer" href="#">Adding New Utilities</a>
			</div>
		</div>
        
        </div> */}

                        <ul className="flex gap-4 justify-content-center">
                            <li>
                                                                    
                                        <FaFacebook className="text-xl hover:text-blue-600 transition duration-300" />
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
                </div>
            </div>
        </div>
    </section>

    );
};

export default Footer;