import Image from "next/image"

const AvailableCars = () => {

    const reservation = [
        {name:"pick-up", place:"Split airport, croatia", date:"21.4.2023", time:"09:00"},
        {name:"drop-up", place:"Split airport, croatia", date:"25.4.2023", time:"12:00"}
    ]

    const cars = [
        {category: "a", title:"VW Up", photo:"/vwup.png", price:"27,61", total:"82,84"},
        {category: "b", title:"Hyundai i20", photo:"/hyundaii20.png", price:"30,79", total:"92,36"},
        {category: "b", title:"VW Polo", photo:"/vwpolo.png", price:"31,19", total:"93,56"},
        {category: "d", title:"Opel Mokka", photo:"/mokka-e.png", price:"27,61", total:"82,84"},
        {category: "a", title:"Fiat 500", photo:"/fiat500.png", price:"27,61", total:"82,84"},
        {category: "b", title:"BMW 1", photo:"/bmw1.png", price:"27,61", total:"82,84"},
        {category: "a", title:"Hyundai i10", photo:"/hyundaii10.png", price:"27,61", total:"82,84"},
        {category: "c", title:"Jaguar E-pace", photo:"/jaguarepace.png", price:"30,79", total:"92,36"},
        {category: "c", title:"Range Rover", photo:"/rangerover.png", price:"30,79", total:"92,36"},
        {category: "c", title:"Mercedes C class", photo:"/mercedescclass.png", price:"30,79", total:"92,36"},
        {category: "a", title:"Toyota Yaris", photo:"/toyotayaris.png", price:"30,79", total:"92,36"},
        {category: "b", title:"Opel Astra", photo:"/opelastra.png", price:"30,79", total:"92,36"},
        {category: "c", title:"Nissan Quasqkai", photo:"/nissanquasqkai.png", price:"30,79", total:"92,36"}
    ]

    return (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {cars.map((car,index) => {
                    return (
                    <div className="bg-rent-white font-comfortea">
                        <div className="flex justify-center my-7">
                            <p className="font-bold text-xl">{car.title}</p><p className="pl-1 text-xl">or similar</p>
                        </div>

                        <div className="relative p-10 items-center flex justify-center w-96 h-72">
                            <Image
                            src={car.photo}
                            alt={car.car}
                            width={300}
                            height={220}
                            fit
                        />
                        </div>

                        <div className="flex justify-around mx-4">
                            <div className="block">
                                <p className="text-xl text-rent-dark-grey my-1">Per Day:</p>
                                <p className="font-bold text-2xl">{`${car.price}`}€</p>
                            </div>

                            <div className="lg:border-l-2 lg:border-rent-dark-grey "></div>

                            <div className="block">
                                <p className="text-xl text-rent-dark-grey my-1">Total:</p>
                                <p className="font-bold text-2xl">{`${car.total}`}€</p>
                            </div>
                        </div>

                        <div className="flex justify-center m-4">
                            <button className="red-btn bg-rent-red text-2xl text-white uppercase p-3 w-full rounded-lg hover:bg-rent-light-red">
                                Select
                            </button>
                        </div>
                        
                    </div>
                    )
                })}
                
            </div>
    )
}

export default AvailableCars