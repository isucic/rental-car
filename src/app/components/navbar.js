'use client'

import Link from "next/link"
import {usePathname} from "next/navigation"
const Navbar = () => {

    const menuItems = [
        { title: "reservation", link: ""},
        { title: "about us", link: "aboutus"},
        { title: "car fleet", link: "carFleet"},
        { title: "news", link: "news"},
    ]

    const pathname = usePathname()
    const isActive = (ime) => {
         return pathname.split("/")[1] === ime.split("/")[1]
    }

    const createItems = () => {
        let number = 0;
        const numberOfItems = menuItems.length;
        const items = menuItems.map((item) => {
            number++;
            const itemLink = `/${item.link === "reservation" ? "" : item.link}`;
            return (
                <Link href={itemLink} key={item.title} >
                    <p
                     className={` text-black text-base lg:text-lg px-2 font-comfortea whitespace-no-wrap capitalize hover:bg-rent-light-red lg:px-5 py-2
                     ${
                        isActive(itemLink)
                        ? "underline-offset-4 text-decoration-line: underline font-bold"
                        : 
                        ""
                     }`}
                    >
                    {item.title}{" "}
                    </p>
                    
                </Link>
            )
        })
        return items;
    }
    return(
        <nav className="py-5 h-20 items-center md:flex hidden">
            {createItems()}
        </nav>
    )
}

export default Navbar;