import Link from "next/link";
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {

    const footerItems = [
        { title: "contact us", link: ""},
        { title: "help", link: ""},
        { title: "terms & conditions", link: ""}
    ]

    const createItems = () => {
        let number = 0;
        const numberOfItems = footerItems.length;
        const items = footerItems.map((item) => {
            number++;
            const itemLink = `/${item.link === "reservation" ? "" : item.link}`;
            return (
                <div href={itemLink} key={item.title} >
                    <a
                     className={`text-white text-base font-comfortea capitalize hover:underline  
                     ${
                        ""
                     }`}
                    >
                    {item.title}{" "}
                    </a>
                </div>
            )
        })
        return items;
    }


    return (
        // <div className="bg-red-500 w-full ">
                <div className="w-full bg-red-500 flex justify-between sm:px-14 px-2 py-5 mt-3">

                    <div className="footeritems text-left text-2xl inline-block">
                        {createItems()}
                    </div>

                    <div className="pb-10 sm:pb-0 pt-5 sm:text-base text-sm">
                        <p className="uppercase font-comfortea text-white">FOLLOW US:</p>
                        <div className="flex pt-2">
                            <div className="flex items-center justify-around md:mr-5 mr-3 text-white">
                                <FaInstagram size={35}/>
                            </div>
                            <div className="flex items-center justify-around md:mr-5 mr-3 text-white">
                                <FaFacebook size={35}/>
                            </div>
                            <div className="flex items-center justify-around md:mr-5 mr-3 text-white">
                                <FaLinkedin size={35}/>
                            </div>

                        </div>
                    </div>
                    
                </div>
            // </div>
    )
}

export default Footer;