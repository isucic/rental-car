import Header from './modules/header/header'
import Footer from './modules/footer/footer'
import {FaRegCalendarAlt} from 'react-icons/fa'
import BlogCard from './components/blogCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-rent-grey">
      <Header />

      <div className='reservation font-comfortea'>
        <div className="reservation-part mx-6">
          <p className="naslov my-4 font-bold">Pick Up & Return location</p>
          <input className="font-comfortea" type="text" placeholder="Split Airport, Croatia" />
        </div>

        <div class="h-16 border-l-2 border-gray-500 mx-6"></div>

        <div className="reservation-part mx-6">
          <p className="naslov my-4 font-bold">Pick Up Time</p>
          <input type="date" className="font-comfortea" placeholder="14:04:2023" />
        </div>

        <div class="h-16 border-l-2 border-gray-500 mx-6"></div>

        <div className="reservation-part mx-6">
          <p className="naslov my-4 font-bold">Drop Off Time</p>
          <input type="date" className="font-comfortea" placeholder="14:04:2023" />
        </div>


        <button className='buttonstart'>
          <p className='font-passion-one text-white uppercase'>Start</p>
        </button>
      </div>

    <div className="my-10">
      <img src="car-home.png" height="400px" width="750px" />
    </div>
    
    <div className='border-t border-gray-500 mx-15'></div>

    <h1 className="podnaslov uppercase text-left w-auto font-passion-one">Check this out</h1>

    <div className="">
      <BlogCard className="w-1/3"/>
    </div>



      <Footer />
    </main>
  )
}
