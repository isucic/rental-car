import ReservationSteps from "@/app/components/reservationSteps"
import Footer from "@/app/modules/footer/footer"
import Header from "@/app/modules/header/header"

const Verification = () => {
    return (
        <div className="flex flex-col min-h-screen items-center justify-between bg-rent-grey">
            <Header />

            <div className="w-11/12">
                <ReservationSteps />

                <div className="bg-rent-white my-6 p-14 rounded-lg shadow-md font-comfortea">
                    <h1 className="font-bold text-xl mb-8">Personal information</h1>

                   <div className="grid md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-8">
                        <div className="flex flex-col">
                            <label htmlFor="first">First Name</label>
                            <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="last">Last Name</label>
                            <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone">Phone number</label>
                            <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"/>
                        </div>
                   </div>
                                      
                </div>

                <div className="bg-rent-white p-14 my-6 rounded-lg shadow-md font-comfortea">
                   <h1 className="font-bold text-xl mb-8">Card information</h1>

                   <div className="grid md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-8">
                        
                            <div className="flex flex-col">
                                <label htmlFor="cardnum">Card Number</label>
                                <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"/>
                            </div>

                            <div className="flex">
                                <div className="flex flex-col">
                                    <label htmlFor="expdate">Expiration Date</label>
                                    <div className="flex">
                                        <select className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"><option></option></select>
                                        <select className="w-1/2 ml-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"><option></option></select>
                                    </div>
                                </div>
                            
                                <div className="ml-16 flex flex-col">
                                        <label htmlFor="ccv2">CCV2</label>
                                        <input type="number" className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
                                </div>
                            </div>
                            
                        

                        <div>
                            <div className="flex flex-col">
                                <label htmlFor="cardnum">Card Holder</label>
                                <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"/>
                            </div>
                        </div>
                   </div>
                </div>
                    <div className='flex items-center my-6 justify-center'>
                        <button className='bg-rent-black rounded-lg h-14 px-6 md:w-max w-full'>
                        <p className='font-passion-one text-white text-4xl capitalize'>Confirm reservation</p>
                        </button>
                    </div>
            </div>

            <Footer />

        </div>
    )
}

export default Verification