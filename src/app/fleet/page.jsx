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

    const types = [
        {category: "a", title: "mini", description: "Perfect for solo travelers or couples, seats up to 2 passengers comfortably."},
        {category: "b", title: "economy", description: "Great for small families or groups of up to 4 passengers."},
        {category: "c", title: "compact", description: "Ideal for slightly larger groups, accommodating up to 5 passengers with ease."},
    ];

    const scrollLeft = (number) => {
        document.getElementById(number).scrollLeft -=400;
    }
    const scrollRight= (number) => {
        document.getElementById(number).scrollLeft +=400;
    }

    return (
        <div className="">
            {
                types.map((type,index) => {
                    return (
                        <div key={index}>
                         <h1 className="uppercase font-comfortea text-2xl flex items-center">
                        {type.title}
                        <div className="hidden md:block dropdown relative hover:cursor-pointer">
                            <FaInfoCircle className="arrow-fleet text-xl ml-3 mb-2 " />
                            <div className="information-dropdown hidden dropdown-content bg-rent-white p-2 rounded-md absolute z-10 shadow-2xl w-max bottom-2 left-10">
                                <p className="normal-case text-base">{type.description}</p>
                            </div>
                        </div>
                        </h1>

                        <div className="w-full border-b-2 border-rent-dark-grey"></div>
                        <div className="flex items-center">
                
                        <FaArrowCircleLeft onClick={() => scrollLeft(type.category)} className="hidden md:block text-5xl cursor-pointer"/>
                        <div id={type.category} className="carousel py-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide gap-8">
                        {cars.map((car,index) => {
                            if(car.category === type.category)
                            return (
                                <CarOfferCard car={car} key={index} />
                            )
                        })}
                        </div>
                        <FaArrowCircleRight onClick={() => scrollRight(type.category)} className="hidden md:block text-5xl cursor-pointer"/>
                        </div>
                        </div>
                    )
                })
            }        
        </div>
    )
}

export default Fleet; 