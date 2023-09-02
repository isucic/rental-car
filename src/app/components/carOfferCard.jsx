import Image from "next/image";

const CarOfferCard = ({car}) => {
    return (
        <div className="flex flex-col flex-shrink-0 justify-self-center rounded-md bg-rent-white items-center justify-center p-4 mb-4">
            <div className="p-3 relative">
                <Image
                        src={car.photo}
                        alt={car.title}
                        width={300}
                        height={260}
                />
            </div>
            <div className="flex font-comfortea">
            <p className="font-bold">{car.title}</p><p className="pl-1">or similar</p>
            </div>
        </div>
        
    )
}

export default CarOfferCard;