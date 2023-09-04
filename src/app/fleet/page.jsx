"use client"
import { FaInfoCircle, FaArrowCircleLeft, FaArrowCircleRight  } from "react-icons/fa";
import CarOfferCard from "../components/carOfferCard";

const Fleet = () => {

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

    const types = ["mini", "economy", "compact"];

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -=200;
    }
    const scrollRight= () => {
        console.log("uslo")
        document.getElementById("content").scrollLeft +=200;
    }

    return (
        <div className="">
            <h1 className="uppercase font-comfortea text-2xl flex items-center">small car<FaInfoCircle className="text-xl ml-3 mb-2" /></h1>
            <div className="w-full border-b-2 border-rent-red"></div>
            <div className="flex items-center gap-5">
                
                <FaArrowCircleLeft onClick={scrollLeft} className="text-5xl cursor-pointer"/>
                <div id="content" className="ml-8 carousel py-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide gap-8">
                    {cars.map((car) => {
                        if (car.category === "a") {
                        return (
                            <CarOfferCard car={car} />
                        );
                    }
                    return null;
                }) 
                    }
                </div>
                <FaArrowCircleRight onClick={scrollRight} className="text-5xl cursor-pointer"/>
            </div>

            <h1 className="uppercase font-comfortea text-2xl flex items-center">economy<FaInfoCircle className="text-xl ml-3 mb-2" /></h1>
            <div className="w-full border-b-2 border-rent-red"></div>
            <div className="flex items-center gap-5">
                <FaArrowCircleLeft className="text-5xl"/>
                <div className="ml-8 carousel py-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide gap-8">
                    {cars.map((car) => {
                        if (car.category === "b") {
                        return (
                            <CarOfferCard car={car} />
                        );
                    }
                    return null;
                }) 
                    }
                </div>
                <FaArrowCircleRight className="text-5xl"/>
            </div>

            <h1 className="uppercase font-comfortea text-2xl flex items-center">compact<FaInfoCircle className="text-xl ml-3 mb-2" /></h1>
            <div className="w-full border-b-2 border-rent-red"></div>
            <div className="flex items-center gap-5">
                <FaArrowCircleLeft className="text-5xl"/>
                <div className="ml-8 carousel py-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide gap-8">
                    {cars.map((car) => {
                        if (car.category === "c") {
                        return (
                            <CarOfferCard car={car} />
                        );
                    }
                    return null;
                }) 
                    }
                </div>
                <FaArrowCircleRight className="text-5xl"/>
            </div>
            
            
        </div>
    )
}

export default Fleet; 