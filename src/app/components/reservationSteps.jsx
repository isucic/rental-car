"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

const ReservationSteps = () => {

    const pathname = usePathname();

    const checkPage = (name) => {
        if(pathname.split("/reservation/")[1] === name)
         return true;
        else return false;
    }

    const steps = [
        {number:"1", name: "reservation"},
        {number:"2", name: "available"},
        {number:"3", name: "details"},
        {number:"4", name: "verification"}
    ]

    const reservation = [
        {name:"pick-up", place:"Split airport, croatia", date:"21.4.2023", time:"09:00"},
        {name:"drop-up", place:"Split airport, croatia", date:"25.4.2023", time:"12:00"}
    ]

    return (
        <>
        <div className="bg-rent-light-red flex justify-around rounded-md shadow-md">
            {steps.map((step,index) => {
                return (
                <Link key={index} href={step.number === "1" ? "/" : `/reservation/${step.name}`} className="cursor-pointer">
                <div className="flex justify-center items-center">
                    <div className={`border rounded-full flex justify-center items-center sm:w-12 sm:h-12 w-8 h-8 m-2
                    ${checkPage(step.name) ? 'border-none bg-rent-white' : 'border-rent-white'}`}>
                        <p className={`${(checkPage(step.name)) ? 'text-rent-light-red' : 'text-rent-white'}
                        font-passion-one sm:text-4xl text-2xl `}>{step.number}</p>
                    </div>

                    <div className="md:block hidden">
                        <p className="font-comfortea text-xl lg:text-2xl text-white capitalize">{step.name}</p>
                    </div>
                </div>
                </Link>
                )
            })
            }
        </div>

        <div className="mb-10 bg-rent-white flex justify-around my-4 font-comfortea capitalize xl:text-xl lg:text-xl md:text-base text-sm">
                    {reservation.map((res,index) => {
                        return (
                            <div key={index} className="md:flex block">
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

        </>
    )
}

export default ReservationSteps;