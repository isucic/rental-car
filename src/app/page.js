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

    <div className="my-10 md:block hidden">
      <img src="car-home.png" height="400px" width="750px" />
    </div>
    
    <div className='border-t border-red-500 mx-8 w-[calc(100%-20px)]'></div>

    <h1 className="podnaslov uppercase text-left w-auto font-passion-one">Check this out</h1>
    <BlogCard className="w-1/3"/>
    <div className='flex items-center justify-center mt-6'>
      <button className="blackbutton text-white capitalize font-passion-one text-4xl">See all</button>
    </div>


    {/* <div className='border-t border-red-500 mx-8 mx-8'></div>

    <div className="">
      <h1 className="podnaslov uppercase text-left w-auto font-passion-one">Cars we offer</h1>
      <CarOfferCard />
      <div className='flex items-center justify-center mt-6'>
        <button className="blackbutton text-white capitalize font-passion-one text-4xl">See all</button>
      </div>
    </div> */}


    <Footer />
    </main>
  )
}
