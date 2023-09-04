import Image from "next/image";

const AboutUs = () => {

    const aboutUsTxt1 = "Car Rental is a registered trademark of Active cars SA which is a low cost car rental company and has been successfully operating in Croatia for over 30 years, offering a wide variety of car rental services with fully inclusive rates and no hidden extras.";
    const aboutUsTxt2 ="Based in Kaštela, our company today operates in more than 400 locations over the country that is making us one of the largest car rental networks in the region and the biggest independant Croatian Company. Our fleet (more than 6.000 cars) consists of a wide range of car types, including all popular categories, as well as 4X4, Mini-Vans, and MPV‘s."
    const aboutUsTxt3 =" Car Rental has extensive experience in dealing with foreign markets, using the latest technology for our central reservation system."

    const info = [
        {name:"Phone number", value:"+385 99 123 4567"},
        {name:"Email", value:"IDrive@rental.com"},
        {name:"Address", value:"Kaštelanska ulica 23"},
        {name:"Working hours", value:"07:00 - 21:00"}
    ]


    return (
            <>
                <div className="w-full h-96 relative">
                    <Image
                    src="/aboutus.webp"
                    alt="aboutus_photo"
                    fill
                    style={{objectFit:"cover"}}
                    />
                </div>

                <div className="text-xl my-12">
                    <p className="my-7 text-justify">{aboutUsTxt1}</p>
                    <p className="my-7 text-justify">{aboutUsTxt2}</p>
                    <p className="my-7 text-justify">{aboutUsTxt3}</p>
                </div>

                <div className="text-xl my-12">
                    {info.map((line, index) => {
                        return (
                            <div key={index} className="flex my-2">
                                <p className="font-bold mr-4">{line.name}</p>
                                <p>{line.value}</p>
                            </div>
                        )
                    })}
                
                </div>

            </>
    )
}

export default AboutUs