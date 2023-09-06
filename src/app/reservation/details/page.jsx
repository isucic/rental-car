"use client"
import CarInfoCard from "@/app/components/carInfoCard";
import { FaInfoCircle } from 'react-icons/fa';
import Link from "next/link";
import { useState } from "react";

const CarDetails = () => {

    const [adds, setAdds] = useState([
        {clicked: false, title: "additional driver", description: "Allow anyone in the group to drive the rental car and give yourself the opportunity to enjoy he journey from the passenger's seat.", price: "10.00"},
        {clicked: false, title: "Child seat", description: "Select seat depending on weight of the child size.", price: "11.25"},
        {clicked: false, title: "GPS navigation", description: "Always be on your way with a GPS in your car rental.", price: "12.50"},
        {clicked: false, title: "Full insurance", description: "Reduce your responsability to a minimum charge by paying a small fee in the price of a collision waiver.", price: "11.25"}
    ]);

    const toggleAdd = (index)  => {
        const updatedAdds = [...adds];
        updatedAdds[index].clicked = !updatedAdds[index].clicked;
        setAdds(updatedAdds)
    }

    return (
            <>
                <div className="lg:flex block">
                    <CarInfoCard className="lg:w-1/3 w-full"/>

                    <div className="lg:w-2/3 block w-full lg:ml-8">
                        {adds.map((add,index) => {
                            return (
                                <div className="bg-rent-white mb-6 p-7">
                                    <p className="text-xl capitalize font-bold mb-2">{add.title}</p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-rent-dark-grey text-base w-3/5">{add.description}</p>
                                        <p className="font-comfortea font-bold text-xl">{add.price}€ /day</p>
                                        <div className="flex justify-center">
                                            <button
                                                onClick={() => toggleAdd(index)}
                                                className={`shadow-md border border-rent-red text-rent-red text-xl uppercase p-2 w-full rounded
                                                            hover:bg-rent-red hover:text-white hover:border-white
                                                            ${add.clicked ? "bg-rent-red text-white" : "bg-rent-white"}
                                                            `}
                                                >
                                            {add.clicked ? "Remove" : "Add"}
                                            </button>
                                        </div>
                                    </div>
                                    {(add.title === "Child seat") &&
                                    <div className="flex w-1/2 items-center">
                                        <select className="block w-1/2 border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
                                            <option></option>
                                            <option>infant</option>
                                            <option>child 2-4</option>
                                            <option>child 4-7</option>
                                        </select>

                                        <input type="number" className="ml-6 w-1/6 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"></input>
                                    </div>}
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="block mt-6">
                    <div className="flex justify-end md:text-3xl text-2xl">
                        <p className="">Rental:</p>
                        <p className="ml-2">93.56 €</p>
                    </div>

                    <div className="flex justify-end items-center my-2 text-base md:text-xl">
                    <div className="hidden md:block dropdown relative hover:cursor-pointer">
                            <FaInfoCircle className="text-xl arrow-fleet text-xl mr-2 " />
                            <div className="information-dropdown hidden dropdown-content bg-rent-white p-2 rounded-md absolute z-10 shadow-2xl w-max bottom-2 right-10">
                                <p className="normal-case text-base">The amount of the security deposit varies depending on the car group you choose for your reservation. </p>
                            </div>
                        </div>
                        <p className="">Security deposit:</p>
                        <p className=" ml-2">500 €</p>
                    </div>

                    <div className="w-full border-b-2 border-rent-red"></div>

                    <div className="flex justify-end my-2 text-2xl">
                        <p className="font-bold md:text-3xl">Total:</p>
                        <p className="md:text-3xl font-bold ml-2">593.56 €</p>
                    </div>


                    <div className='flex items-center my-6 justify-end'>
                    <Link href="/reservation/verification" className="w-full justify-end flex">
                    <button className='bg-rent-black rounded-lg h-14 lg:w-44 justify-center align-center w-full'>
                        <p className='blackbutton font-passion-one text-white text-4xl capitalize'>Continue</p>
                    </button>
                    </Link>
                    </div>
                </div>


            </>

    )
}

export default CarDetails;