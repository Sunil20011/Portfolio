import React, { useState } from "react";
import pic from "../../public/Mypic.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        { id: 1, text: "Home", section: "Home" },
        { id: 2, text: "Skills", section: "Skills" },
        { id: 3, text: "Work Experience", section: "Work Experience" },
        { id: 4, text: "Projects", section: "Projects" },
        { id: 5, text: "Education", section: "Education" },
        { id: 6, text: "Contact", section: "Contact" },
    ];

    return (
        <>
            <div className="max-w-screen-2xl text-white container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-black">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-2">
                        <img src={pic} className="h-16 w-12  rounded-full hover:scale-90" alt="" />
                        <h1 className="font-semibold text-xl cursor-pointer">
                            Suni<span className="text-green-500 text-2xl">L</span>
                            <p className="text-sm">Web Developer</p>
                        </h1>
                    </div>
                    {/* desktop navbar */}
                    <div>
                        <ul className="hidden md:flex space-x-8">
                            {navItems.map(({ id, text, section }) => (
                                <li
                                    className="hover:scale-125 duration-200 cursor-pointer"
                                    key={id}
                                >
                                    <Link
                                        to={section}
                                        smooth={true}
                                        duration={600}
                                        offset={-70}
                                        activeClass="active"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div onClick={() => setMenu(!menu)} className="md:hidden">
                            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                    </div>
                </div>
                {/* mobile navbar */}
                {menu && (
                    <div className="bg-gradient-to-b from-black to-gray-900 h-96 border rounded-md flex justify-center">
                        <ul className="md:hidden flex flex-col text-white  items-center justify-center space-y-7 text-xl">
                            {navItems.map(({ id, text, section }) => (
                                <li
                                    className="hover:scale-125 duration-200 cursor-pointer"
                                    key={id}
                                >
                                    <Link
                                        onClick={() => setMenu(!menu)}
                                        to={section}
                                        smooth={true}
                                        duration={1000}
                                        offset={-70}
                                        activeClass="active"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
