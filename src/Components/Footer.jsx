import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
    return (
        <>
            <footer className="pt-28 pb-10 bg-gradient-to-b from-gray-950 to-black">
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                    <div className=" flex flex-col items-center justify-center ">
                        <div className="flex space-x-4 ">
                            <ul className="flex space-x-4 text-white">
                                <li className="text-2xl hover:scale-125 duration-200 font-semibold cursor-pointer"><a href='https://www.instagram.com/sunilsharma162/' target='blank'><FaInstagram size={24} /></a></li>
                                <li className="text-2xl hover:scale-125 duration-200 font-semibold cursor-pointer"><a href='https://www.linkedin.com/in/sunil-sharma-778840221/' target='blank'><FaLinkedinIn size={24} /></a></li>
                            </ul>
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col text-white items-center">
                            <p className="text-sm">
                                &copy; 2024 Sunil Sharma. All rights reserved.
                            </p>
                            <p className="text-sm">Supportive Partner ❤️ Sunil</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
