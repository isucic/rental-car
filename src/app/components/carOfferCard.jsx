import Image from "next/image";

const CarOfferCard = () => {
    const cars = [
        { photo: "/vwup.png", title: "VW Up" },
        { photo: "/vwpolo.png", title: "VW Polo" },
        { photo: "/mercedescclass.png", title: "C class" },        
        { photo: "/nissanquasqkai.png", title: "Quasqkai" },
    ] 

    return (
        <div className="xl:flex flex-wrap flex-row w-full justify-around grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {cars.map((car) => {
            return (
                <div className="flex flex-col justify-self-center mb-6 rounded-md bg-rent-white items-center justify-center p-4 mb-4">
                    <div className="p-3 relative">
                        <Image
                             src={car.photo}
                             alt={car.title}
                             width={280}
                             height={260}
                        />
                    </div>
                    <div className="flex font-comfortea">
                    <p className="font-bold">{car.title}</p><p className="pl-1">or similar</p>
                    </div>
                </div>
            )
        }) 
        }
        </div> 
        
    )
}

export default CarOfferCard;