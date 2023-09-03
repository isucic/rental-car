import ReservationSteps from "@/app/components/reservationSteps";
import Header from "../../modules/header/header"
import Footer from "@/app/modules/footer/footer";
import CarInfoCard from "@/app/components/carInfoCard";
import { FaInfoCircle } from 'react-icons/fa';

const CarDetails = () => {

    const adds = [
        {title: "additional driver", description: "Allow anyone in the group to drive the rental car and give yourself the opportunity to enjoy he journey from the passenger's seat.", price: "10.00"},
        {title: "Child seat", description: "Select seat depending on weight of the child size.", price: "11.25"},
        {title: "GPS navigation", description: "Always be on your way with a GPS in your car rental.", price: "12.50"},
        {title: "Full insurance", description: "Reduce your responsability to a minimum charge by paying a small fee in the price of a collision waiver.", price: "11.25"}
    ];

    return (
            <>
                <div className="lg:flex block">
                    <CarInfoCard className="lg:w-1/3 w-full"/>

                    <div className="lg:w-2/3 block w-full lg:ml-8">
                        {adds.map((add) => {
                            return (
                                <div className="bg-rent-white mb-6 p-7">
                                    <p className="text-xl capitalize font-bold mb-2">{add.title}</p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-rent-dark-grey text-base w-3/5">{add.description}</p>
                                        <p className="font-comfortea font-bold text-xl">{add.price}€ /day</p>
                                        <div className="flex justify-center">
                                            <button className="bg-rent-white shadow-md border border-rent-red text-rent-red text-xl uppercase p-2 w-full rounded
                                            hover:bg-rent-red hover:text-white hover:border-white">
                                            Add
                                            </button>
                                        </div>
                                    </div>
                                    {(add.title === "Child seat") && 
                                    <div className="flex w-1/2 items-center">
                                        <select className="block appearance-none w-1/2 bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
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
                        <FaInfoCircle className="text-xl mr-1" />
                        <p className="">Security deposit:</p>
                        <p className=" ml-2">500 €</p>
                    </div>
                
                    <div className="w-full border-b-2 border-rent-red"></div>

                    <div className="flex justify-end my-2 text-2xl">
                        <p className="font-bold md:text-3xl">Total:</p>
                        <p className="md:text-3xl font-bold ml-2">593.56 €</p>
                    </div>

                    
                    <div className='flex items-center my-6 justify-end'>
                    <button className='bg-rent-black rounded-lg h-14 lg:w-44 justify-center align-center w-full'>
                        <p className='font-passion-one text-white text-4xl capitalize'>Continue</p>
                    </button>
                    </div>
                </div>

                
            </> 

    )
}

export default CarDetails;