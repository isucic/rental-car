import BurgerNav from '@/app/components/burgerNav';
import Navbar from '../../components/navbar'
import RightNavbar from '@/app/components/rightNavbar';

const Header = () => {
    return(
    <div className="flex sm:px-14 px-2 justify-between items-center w-full mb-4">
        <h1 className="font-passion-one text-5xl">LOGO</h1>
        <Navbar />
        <RightNavbar />
        <BurgerNav isOpen={true}/>
    </div>
    )
}

export default Header;