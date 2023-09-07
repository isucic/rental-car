"use client"
import { FaUserCircle } from 'react-icons/fa';
import {usePathname} from "next/navigation"
import Link from 'next/link';


const RightNavbar = ({mobile}) => {

    const pathname = usePathname()


    return(
        <>
            <nav className="flex text-black items-center md:flex hidden">
                {/* {!mobile && ( */}
                <div className="relative dropdown px-8 font-comfortea">
                    <button className='text-center'>
                        <FaUserCircle size={40} className="mx-auto size-xl"/>
                    </button>
                    <div className="hidden dropdown-content bg-rent-white absolute left-1 w-28 text-base text-center z-10 shadow-2xl">
                    <Link
                     href={"/login"}
                     key="dropdown1"
                     // passHref
                    >
                        <p className="text-center py-2 whitespace-nowrap hover:bg-rent-red">
                        Sign In
                        </p>
                    </Link>

                    <Link
                     href={"/registration"}
                    key="dropdown2"
                     // passHref
                    >
                        <p className="text-center py-4 whitespace-nowrap hover:bg-rent-red">
                        Sign Up
                        </p>
                    </Link>

                    </div>
                </div>

                <select className="block font-comfortea ml-4 leading-5 bg-rent-grey focus:outline-none cursor-pointer">
                    <option className='bg-rent-grey focus:outline-none cursor-pointer'>English</option>
                    <option className='bg-rent-grey focus:outline-none cursor-pointer'>Hrvatski</option>
                </select>
                {/* )} */}

                {mobile && (
                    <div className='flex flex-col text-center mt-6 text-lg w-full'>
                        <Link href="">
                            <p
                             className={` px-6 py-4 whitespace-nowrap uppercase bg-rent-grey ${
                                pathname.includes("profile") || 
                                pathname.includes("login")
                                 ? "underline-offset-4 text-decoration-line: undeline font-bold"
                                 : "" } 
                             `}
                            >
                                Login
                            </p>
                        </Link>
                    </div>
                )}
                
                            
            </nav>
        </>
    )
}

export default RightNavbar;