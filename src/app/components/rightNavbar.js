import { FaUserCircle } from 'react-icons/fa';
// import  UK  from 'country-flag-icons/3x2/UK'

const RightNavbar = () => {
    return(
        <>
            <nav className="flex text-black items-center md:flex hidden">
                <FaUserCircle size={40} className="mx-auto size-xl"/>
                <p className='pl-10'>UK Zastava</p>
                {/* <UK /> */}
             
            </nav>
        </>
    )
}

export default RightNavbar;