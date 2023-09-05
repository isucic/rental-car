import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
    <div className='block md:w-1/3 w-full items-center justify-center'>
        <h1 className='font-passion-one xl:text-6xl lg:text-4xl text-2xl'>Oops, it seems like you've hit a dead end!</h1>
        <h2 className='my-4 font-comfortea lg:text-xl text-base'>No worries, we'll tow you back. 
        <a href="/" className='mx-1 underline text-rent-red'>Click here</a> 
        or use the menu above to get back on track.</h2>
      </div>
      
      <div className='relative md:w-1/2 md:h-full w-96 h-72 flex justify-center items-center'>
        <Image
        src="/towing-error.png"
        alt="404"
        width={600}
        height={600}
        />
      </div>

    </div>
  )
}