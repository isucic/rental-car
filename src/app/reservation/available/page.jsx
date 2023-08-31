import Footer from "../../modules/footer/footer"
import Header from "../../modules/header/header"
import Image from "next/image"

const AvailableCars = () => {

    const steps = [
        {number:"1", name: "reservation"},
        {number:"2", name: "available"},
        {number:"3", name: "vehicle"},
        {number:"4", name: "verification"}
    ]

    const reservation = [
        {name:"pick-up", place:"Split airport, croatia", date:"21.4.2023", time:"09:00"},
        {name:"drop-up", place:"Split airport, croatia", date:"25.4.2023", time:"12:00"}
    ]

    const cars = [
        {category: "a", car:"VW Up", photo:"/vwup.png", price:"27,61", total:"82,84"},
        {category: "b", car:"Hyundai i20", photo:"/hyundaii20.png", price:"30,79", total:"92,36"},
        {category: "c", car:"VW Polo", photo:"/vwpolo.png", price:"31,19", total:"93,56"},
        {category: "d", car:"Opel Mokka", photo:"/mokka-e.png", price:"27,61", total:"82,84"},
        {category: "a", car:"VW Up", photo:"/vwup.png", price:"27,61", total:"82,84"},
        {category: "a", car:"VW Up", photo:"/vwup.png", price:"27,61", total:"82,84"},
        {category: "a", car:"VW Up", photo:"/vwup.png", price:"27,61", total:"82,84"}
    ]

    return (
        <div className="flex flex-col min-h-screen items-center justify-between bg-rent-grey">
            <Header />

            <div className="w-11/12">
                <div className="bg-rent-light-red flex justify-around rounded-md shadow-md">
                    {steps.map((step,index) => {
                        return (
                         <div className="flex justify-center items-center">
                            <div className={`border border-rent-white rounded-full flex justify-center items-center sm:w-12 sm:h-12 w-8 h-8 m-2
                            `}>
                                <p className="font-passion-one sm:text-4xl text-2xl text-rent-white ">{step.number}</p>
                            </div>

                            <div className="md:block hidden">
                                <p className="font-comfortea text-xl lg:text-2xl text-white capitalize">{step.name}</p>
                            </div>
                        </div>
                        )
                    })
                    }
                </div>

                <div className="bg-rent-white flex justify-around my-4 font-comfortea capitalize xl:text-2xl lg:text-xl md:text-base text-sm">
                    {reservation.map((res,index) => {
                        return (
                            <div className="md:flex block">
                                <p className="xl:block hidden font-bold mr-6">{res.name}</p>
                                <p className="mr-3 text-rent-dark-grey">{res.place}</p>
                                <div className="flex">
                                    <p className="mr-3 text-rent-dark-grey">{res.date}</p>
                                    <p className="mr-3 text-rent-dark-grey">{res.time}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center">
                    {cars.map((car,index) => {
                        return (
                        <div className="bg-rent-white m-3 font-comfortea">
                            <div className="flex justify-center my-7">
                                <p className="font-bold text-xl">{car.car}</p><p className="pl-1 text-xl">or similar</p>
                            </div>

                            <div className="relative p-10">
                                <Image
                                src={car.photo}
                                alt={car.car}
                                width={280}
                                height={260}
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
                                <button className="bg-rent-red text-2xl text-white uppercase p-3 w-full rounded-lg">
                                    Select
                                </button>
                            </div>
                            
                        </div>
                        )
                    })}
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AvailableCars