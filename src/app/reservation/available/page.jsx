import Footer from "../../modules/footer/footer"
import Header from "../../modules/header/header"

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

                <div className="">

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AvailableCars