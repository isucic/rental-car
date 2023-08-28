import Link from "next/link"

const Navbar = () => {

    const menuItems = [
        { title: "reservation", link: ""},
        { title: "about us", link: ""},
        { title: "car fleet", link: ""},
        { title: "news", link: "blog"},
    ]


    const createItems = () => {
        let number = 0;
        const numberOfItems = menuItems.length;
        const items = menuItems.map((item) => {
            number++;
            const itemLink = `/${item.link === "reservation" ? "" : item.link}`;
            return (
                <div href={itemLink} key={item.title} >
                    <a
                     className={` text-black text-base lg:text-lg px-2 font-comfortea whitespace-no-wrap capitalize hover:bg-rent-light-red lg:px-5 py-2
                     ${
                        // isActive(itemLink)
                        // ? "underline-offset-4"
                        // : 
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
    return(
        <nav className="py-5 h-20 items-center md:flex hidden">
            {createItems()}
        </nav>
    )
}

export default Navbar;