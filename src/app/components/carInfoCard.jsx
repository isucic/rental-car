import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { FaCogs, FaSuitcaseRolling, FaUserAlt, FaCheck } from 'react-icons/fa'

const CarInfoCard = () => {

    const car = {
        name: "VW Polo",
        category: "Economy",
        photo: "/vwpolo.png",
        seats: "5",
        luggage: "2",
        transmission: "manual"
    };

    const info = ["unlimited mileage", "collision damage waiver", "theft protection", "winter tyres", "VAT 25%"];
    
    return (
        <div className="bg-rent-white rounded-md shadow-md mb-4">
        <div className="bg-yellow-300 flex justify-between p-3">
            <p className="font-bold text-xl">{car.name}</p>
            <p className="text-xl">{car.category}</p>
        </div>

        <div className="relative p-5 flex justify-center items-center">
            <Image
                src={car.photo}
                alt={car.car}
                width={400}
                height={260}
            />
        </div>

        <div className="flex justify-around p-3">
            <div className="flex items-center">
                <p className="text-xl text-rent-dark-grey mr-2">{car.seats}x</p>
                <FaUserAlt className="text-xl text-rent-dark-grey" />
            </div>
            <div className="flex text-xl text-rent-dark-grey">
                <p className="mr-2">{car.luggage}x</p>
                <FaSuitcaseRolling className="text-2xl"/>
            </div>
            <div className="flex text-xl text-rent-dark-grey">
                <p className="capitalize mr-2">{car.transmission}</p>
                <FaCogs className="text-2xl"/>
            </div> 
        </div>

        <div className="block p-4">
            {info.map((item) => {
                return (
                    <div className="flex items-center m-2">
                        <FaCheck className="text-yellow-400 text-xl mr-2"/>
                        <p className="text-xl text-rent-dark-grey capitalize">{item}</p>
                    </div>
                )
            })}
        </div>
    </div>       
    )
}

export default CarInfoCard