
"use cliend"
import data from '../json/data.json'
import { useRouter } from 'next/navigation'


const ReservationSearch = () => {
    const router = useRouter()
    const places = data.location;

    function handleSearch() {
        router.push("/reservation/available")
      }

    return (
        <div className='text-sm rounded-md bg-rent-white font-comfortea items-center justify-center
        lg:text-base lg:w-max lg:flex lg:flex-row lg:justify-evenly p-6'>
  
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
    )
}

export default ReservationSearch