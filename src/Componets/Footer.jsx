import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <section data-aos="fade-right" data-aos-duration="7000" className="ezy__copyright9 light py-12 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
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