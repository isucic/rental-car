"use client"

import {FaRegCalendarAlt} from 'react-icons/fa'
import BlogCard from './components/blogCard'
import CarOfferCard from './components/carOfferCard'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import data from './json/data.json'

import ReservationSearch from './components/reservationSearch'

export default function Home() {


  const blogPosts = data.blog;

  const router = useRouter();

  const cars = [
    { photo: "/vwup.png", title: "VW Up" },
    { photo: "/vwpolo.png", title: "VW Polo" },
    { photo: "/mercedescclass.png", title: "C class" },        
    { photo: "/nissanquasqkai.png", title: "Quasqkai" },
  ]

  return (
    <div className="flex flex-col min-h-screen items-center justify-between bg-rent-grey">


    {/* <ReservationSearch /> */}
    <div className='relative mt-10 w-full h-front-photo flex items-center justify-center'>
          <Image
           src="/front.webp"
           alt="car-home"
           fill
           style={{objectFit:"cover"}}
           priority={true}
           />
          <div className="absolute inset-0 flex items-start justify-center z-10 m-10">
              <ReservationSearch />
            </div>    
      </div>



    <div className='border-t border-rent-black my-6 w-full'></div>

    <div className="flex w-full mt-10 mb-6">
      <h1 className="lg:text-5xl uppercase text-5xl font-comfortea font-bold">What's new</h1>
    </div>

    <div className="xl:flex w-full justify-around grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 md:p-0">
      {blogPosts.map((blog,index) => {
        if (index < 3)
        return (
          <BlogCard key={index} blog={blog}/>
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
      {cars.map((car,index) => {
            return (
              <div key={index}>
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
