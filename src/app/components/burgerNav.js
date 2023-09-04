'use client'

import { useState } from "react";
import BurgerNavIcon from "./burgerNavIcon";
import {usePathname} from "next/navigation"
import Link from "next/link";
import RightNavbar from "./rightNavbar";


const BurgerNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        {title: "reservation", link: ""},
        {title: "our cars", link: "fleet"},
        {title: "news", link: "news"},
        {title: "about us", link: "aboutus"},
    ]

    const pathname = usePathname()
    const isActive = (ime) => {
         return pathname.split("/")[1] === ime.split("/")[1]
    }

    return(
        <div className="md:hidden flex flex-col">
            <div className="flex justify-between items-center">
                <BurgerNavIcon clicked={isOpen} setIsClicked={setIsOpen}/>
            </div>

            <main className={`${
                !isOpen ? 'translate-x-full' : 'translate-x-0'
            } transform translate fixed right-0 m-0 top-0 p-0 bg-rent-light-red md:hidden transition duration-500 ease-in-out flex-col justify-center items-center h-screen z-20`}>
                <BurgerNavIcon clicked={isOpen} setIsClicked={setIsOpen} classes={" bg-red-800"} />
                <div className="flex flex-col text-center mt-10">
                    {menuItems.map((item) => {
                            const itemLink = `/${item.link === "reservation" ? "" : item.link}`;
                            return (
                            <Link href={itemLink} key={item.title}>
                                <p
                                 className={`text-white text-lg font-comfortea py-4 px-8 whitespace-nowrap uppercase hover:bg-fitify-green
                                 ${
                                   isActive(itemLink)
                                     ? "underline-offset-4 text-decoration-line: underline font-bold"
                                     : ""
                                 }`}
                                >
                             {item.title}{" "}
                                </p>
                            </Link>
                        )
                    })}
                    <RightNavbar mobile={true} />
                </div>
            </main>
        </div>
    )
}

export default BurgerNav;