import Link from "next/link"

const Login = () => {
    return (
        <div className="flex items-center justify-center">
        <div className="bg-rent-white shadow-md font-comfortea flex flex-col items-center justify-center p-6 w-full lg:w-1/2">
        <h1 className="text-4xl uppercase">login</h1>
        <div className="w-full border-b-2 border-rent-dark-grey my-4"></div>

           <div className="flex flex-col my-4 w-3/4">
                <label htmlFor="username">Username</label>
                <input type="text" className="border border-dark-grey rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"/>
            </div>
           <div className="flex flex-col my-4 w-3/4">
                <label htmlFor="password">Password</label>
                <input type="password" className="border border-dark-grey rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"/>
            </div>

            <button className='redbtn my-4 bg-rent-red rounded-lg h-14 px-6 w-3/4'>
            <p className='font-comfortea text-white text-2xl uppercase'>login</p>
            </button>
            <p>Don't have an account? 
                <Link href="/registration" className="pl-1 text-rent-red font-bold">Sign Up</Link>
            </p>
           
            


        </div>
        </div>
    )
}

export default Login