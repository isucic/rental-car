'use client'

import { useState } from "react";
import BurgerNavIcon from "./burgerNavIcon";


const BurgerNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="md:hidden flex flex-col">
            <div className="flex justify-between items-center">
                <BurgerNavIcon clicked={isOpen} setIsClicked={setIsOpen}/>
            </div>

            <main className={`${
                !isOpen ? 'translate-x-full' : 'translate-x-0'
            } transform translate fixed right-0 m-0 top-0 p-0 bg-fitify-black md:hidden transition duration-500 ease-in-out flex-col justify-center items-center h-screen z-20`}>
                <BurgerNavIcon clicked={isOpen} setIsClicked={setIsOpen} classes={" bg-red-800"} />
            </main>
        </div>
    )
}

export default BurgerNav;