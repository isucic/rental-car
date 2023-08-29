import Header from './modules/header/header'
import Footer from './modules/footer/footer'
import {FaRegCalendarAlt} from 'react-icons/fa'
import BlogCard from './components/blogCard'
import CarOfferCard from './components/carOfferCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-rent-grey">
      <Header />

      <div className='reservation font-comfortea'>
        <div className="reservation-part mx-6">
          <p className="naslov my-4 font-bold">Pick Up & Return location</p>
          <input className="font-comfortea" type="text" placeholder="Split Airport, Croatia" />
        </div>

        <div className="h-16 border-l-2 border-gray-500 mx-6"></div>

        <div className="reservation-part mx-6">
          <p className="naslov my-4 font-bold">Pick Up Time</p>
          <input type="date" className="font-comfortea" placeholder="14:04:2023" />
        </div>

        <div className="h-16 border-l-2 border-gray-500 mx-6"></div>

        <div className="reservation-part mx-6">
          <p className="naslov my-4 font-bold">Drop Off Time</p>
          <input type="date" className="font-comfortea" placeholder="14:04:2023" />
        </div>

        <button className='blackbutton'>
          <p className='font-passion-one text-white uppercase'>Start</p>
        </button>
      </div>

    <div className="my-10">
      <img src="car-home.png" height="400px" width="750px" />
    </div>
    
    {/* <div className='border-t border-red-500 mx-8 w-[calc(100%-20px)]'></div> */}

    <div className="">
      <h1 className="podnaslov uppercase text-left w-auto font-passion-one">Check this out</h1>
      <BlogCard className="w-1/3"/>
      <div className='flex items-center justify-center mt-6'>
        <button className="blackbutton text-white capitalize font-passion-one text-4xl">See all</button>
      </div>
    </div>


    <div className='border-t border-red-500 mx-8 mx-8'></div>

    <div className="">
      <h1 className="podnaslov uppercase text-left w-auto font-passion-one">Cars we offer</h1>
      <CarOfferCard />
      <div className='flex items-center justify-center mt-6'>
        <button className="blackbutton text-white capitalize font-passion-one text-4xl">See all</button>
      </div>
    </div>


    <Footer />
    </main>
  )
}
