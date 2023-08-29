
const CarOfferCard = () => {
    const cars = [
        { photo: "vwup.png", title: "VW Up" },
        { photo: "vwpolo.png", title: "VW Polo" },
        { photo: "mercedescclass.png", title: "C class" },        
        { photo: "nissanquasqkai.png", title: "Quasqkai" },
    ] 

    return (
        <div className="flex">
        {cars.map((car) => {
            return (
                <div className="border rounded-md bg-rent-white flex flex-col items-center justify-center mx-1 p-4">
                    <div className="p-3 w-72">
                        <img src={car.photo} />
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