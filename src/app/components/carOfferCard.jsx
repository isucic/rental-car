"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";

const CarOfferCard = ({car}) => {

    const pathname = usePathname();
    const pageName = pathname.split("/")[1];
    return (
        <div className="flex flex-col flex-shrink-0 justify-self-center rounded-md bg-rent-white items-center justify-center p-4 m-4">
            <div className="p-3 relative md:w-80 w-72 h-60 justify-center items-center flex">
                <Image
                        src={car.photo}
                        alt={car.title}
                        width={(pageName === "fleet") ? 300 : 230}
                        height={(pageName === "fleet") ? 260 : 220}
                        fit
                />
            </div>
            <div className="flex font-comfortea">
            <p className="font-bold">{car.title}</p><p className="pl-1">or similar</p>
            </div>
        </div>
        
    )
}

export default CarOfferCard;