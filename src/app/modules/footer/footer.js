import Link from "next/link";
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {

    const footerItems = [
        { title: "contact us", link: "contactus"},
        { title: "help", link: "help"},
        { title: "terms & conditions", link: "termsandconditions"}
    ]

    const pages = [
        {title: "reservation", link:""},
        {title: "about us", link:"aboutus"},
        {title: "our cars", link:"fleet"},
        {title: "news", link:"news"},

    ]

    const createItems = (list) => {
        let number = 0;
        const numberOfItems = footerItems.length;
        const items = list.map((item) => {
            number++;
            const itemLink = `/${item.link === "reservation" ? "" : item.link}`;
            return (
                <Link href={itemLink} key={item.title} >
                    <p
                     className={`cursor-pointer mb-1 text-white text-base font-comfortea capitalize hover:underline  
                     ${
                        ""
                     }`}
                    >
                    {item.title}{" "}
                    </p>
                </Link>
            )
        })
        return items;
    }


    return (
        // <div className="bg-red-500 w-full ">
                <div className="w-full bg-red-500 flex justify-between items-center sm:flex-row flex-col sm:px-14 px-2 py-5 mt-3">
                    
                    <div className="flex justify-between items-center lg:w-3/6 sm:w-1/2 w-5/6">
                        <div className="pb-10 sm:pb-0 pt-5 text-left text-2xl inline-block">
                            {createItems(footerItems)}
                        </div>

                        <div className="pb-10 sm:pb-0 pt-5 text-left text-2xl inline-block">
                            {createItems(pages)}
                        </div>
                    </div>

                    <div className="pb-10 sm:pb-0 pt-5 sm:text-base text-sm">
                        <p className="uppercase font-comfortea text-white">FOLLOW US:</p>
                        <div className="flex pt-2">
                            <div className="cursor-pointer flex items-center justify-around md:mr-5 mr-3 text-white">
                                <FaInstagram size={35}/>
                            </div>
                            <div className="cursor-pointer flex items-center justify-around md:mr-5 mr-3 text-white">
                                <FaFacebook size={35}/>
                            </div>
                            <div className="cursor-pointer flex items-center justify-around md:mr-5 mr-3 text-white">
                                <FaLinkedin size={35}/>
                            </div>

                        </div>
                    </div>
                    
                </div>
            // </div>
    )
}

export default Footer;