import Header from './modules/header/header'
import Footer from './modules/footer/footer'
import {FaRegCalendarAlt} from 'react-icons/fa'
import BlogCard from './components/blogCard'
import CarOfferCard from './components/carOfferCard'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between bg-rent-grey">
      <Header />

      <div className='text-sm mt-4 rounded-md bg-rent-white font-comfortea w-11/12 items-center justify-center
      lg:text-base lg:w-max lg:flex lg:flex-row lg:justify-evenly'>

        <div className="lg:flex-col p-2 lg:mx-6 mx-2 flex justify-center items-center">
          <p className="my-4 lg:my-2 font-bold">Pick Up & Return location</p>
          <input className="font-comfortea bg-white w-full h-fit border border-slate-300 rounded-md pl-1 py-2 pb-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Split Airport, Croatia" type="text" name="search"/>

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
          <button className='bg-rent-black rounded-lg h-14 lg:w-44 justify-center align-center w-full'>
            <p className='font-passion-one text-white text-4xl uppercase'>Start</p>
          </button>
        </div>
      </div>

    <div className="my-10 w-3/5 flex items-center justify-center">
      <img src="car-home.png" height="400px" width="750px" />
    </div>
    
    <div className='border-t border-rent-black my-6 w-11/12'></div>

    <div className="flex w-11/12">
      <h1 className="lg:text-7xl uppercase text-5xl font-passion-one">Check this out</h1>
    </div>

    <BlogCard className=""/>
    <div className='flex items-center justify-center'>
      <button className="bg-rent-black rounded-lg h-14 md:w-44 w-28 justify-center align-center w-full text-white capitalize font-passion-one md:text-4xl text-3xl">See all</button>
    </div>


    <div className='border-t border-rent-black my-6 w-11/12'></div>

      <div className="flex w-11/12">
        <h1 className="lg:text-7xl uppercase text-5xl font-passion-one">Cars we offer</h1>
      </div>

      <CarOfferCard />

    <div className='flex items-center justify-center'>
      <button className="bg-rent-black rounded-lg h-14 md:w-44 w-28 justify-center align-center w-full text-white capitalize font-passion-one md:text-4xl text-3xl">See all</button>
    </div>


    <Footer />
    </main>
  )
}
