"use client"
import { useState } from "react";

const Contactus = () => {
    return (
        <div className="bg-rent-white my-6 p-14 rounded-lg shadow-md font-comfortea">
            <h1 className="uppercase">Contact us</h1>
            <h2 className="font-bold mt-10 mb-3 sm:text-lg text-base">Have a question or just want to leave a comment:</h2>
            <p><span className="font-semibold">Phone number:</span> +385 99 123 4567</p>
            <p><span className="font-semibold">Email:</span> IDrive@rental.com</p>
            <button className="redbtn my-4 bg-rent-red rounded-lg p-4 text-white">Send message</button>
        </div>
    )
}

export default Contactus;