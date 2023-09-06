"use client"

import {FaRegCalendarAlt} from 'react-icons/fa'
import BlogCard from './components/blogCard'
import CarOfferCard from './components/carOfferCard'
import { useRouter } from 'next/navigation'

import data from './json/data.json'
import { useState } from 'react'

export default function Home() {

  const [location,setLocation] = useState("");
  const [pickupDate,setPickupDate] = useState("");

  function handleSearch() {
    // onSearch(location, pickupDate)
    router.push("/reservation/available")
  }

  const blogPosts = data.blog;
  const places = data.location;

  const router = useRouter()

  const cars = [
    { photo: "/vwup.png", title: "VW Up" },
    { photo: "/vwpolo.png", title: "VW Polo" },
    { photo: "/mercedescclass.png", title: "C class" },        
    { photo: "/nissanquasqkai.png", title: "Quasqkai" },
  ]

  return (
    <div className="flex flex-col min-h-screen items-center justify-between bg-rent-grey">
      <div className='text-sm rounded-md bg-rent-white font-comfortea items-center justify-center
      lg:text-base lg:w-max lg:flex lg:flex-row lg:justify-evenly'>

        <div className="lg:flex-col p-2 lg:mx-6 mx-2 flex lg:justify-center lg:justify-start items-center ">
          <p className="my-4 lg:my-2 font-bold">Pick Up & Return location</p>
          <select className="font-comfortea bg-white w-full h-fit border border-slate-300 rounded-md pl-1 py-2 pb-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
          {places.map((place,index ) => {
            return (
              <option>
                {place.name}
              </option>
            )
          })}
          </select>

        </div>

        <div className="lg:h-16 lg:border-l-2 lg:border-gray-500 lg:mx-6"></div>

        <div className="lg:flex-col p-2 lg:mx-6 mx-2 flex justify-center items-center">
          <p className="my-4 lg:my-2 font-bold">Pick Up Time</p>
          <input type="date" className="bg-white w-full h-fit border border-slate-300 rounded-md pl-1 py-2 pb-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Split Airport, Croatia" name="search"/>
        </div>

        <div className="lg:h-16 lg:border-l-2 lg:border-gray-500 lg:mx-6"></div>

        <div className="lg:flex-col p-2 lg:mx-6 mx-2 flex">
          <p className="my-4 font-bold">Drop Off Time</p>
          <input type="date" className="bg-white w-full h-fit border border-slate-300 rounded-md pl-1 py-2 pb-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Split Airport, Croatia" name="search"/>
        </div>
        

        <div className='p-2 flex mx-6 flex items-center justify-center'>
          <button 
           onClick={handleSearch}
           className='blackbutton bg-rent-black rounded-lg h-14 lg:w-44 justify-center align-center w-full'>
            <p className='font-passion-one text-white text-4xl uppercase'>Start</p>
          </button>
        </div>
      </div>

    <div className="my-10 w-3/5 flex items-center justify-center">
      <img src="car-home.png" height="400px" width="750px" />
    </div>
    
    <div className='border-t border-rent-black my-6 w-full'></div>

    <div className="flex w-full mt-10 mb-6">
      <h1 className="lg:text-5xl uppercase text-5xl font-comfortea font-bold">What's new</h1>
    </div>

    <div className="xl:flex w-full justify-around grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 md:p-0">
      {blogPosts.map((blog,index) => {
        return (
          <BlogCard blog={blog}/>
        )
      })}
    </div>

    <div className='flex items-center justify-center mt-6'>
      <button 
       className='redbtn my-4 bg-rent-red rounded-lg h-14 px-6 w-full'
       onClick={() => router.push("/news")}
      >
        <p className='font-comfortea text-white text-2xl uppercase'>See all</p></button>
    </div>


    <div className='border-t border-rent-black my-6 w-full'></div>

    <div className="flex w-full mt-10 mb-6">
      <h1 className="lg:text-5xl uppercase text-5xl font-comfortea font-bold">Cars we offer</h1>
    </div>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
      {cars.map((car) => {
            return (
              <div className=''>
                <CarOfferCard car={car} />
              </div>
            )
        }) 
      }
      </div>
      
    <div className='flex items-center justify-center mt-6'>
      <button 
        className='redbtn my-4 bg-rent-red rounded-lg h-14 px-6 w-full'      
        onClick={() => router.push("/fleet")}
      >
        <p className='font-comfortea text-white text-2xl uppercase'>See all</p>
      </button>

    </div>
    </div>
  )
}
