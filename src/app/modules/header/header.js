import BurgerNav from '@/app/components/burgerNav';
import Navbar from '../../components/navbar'
import RightNavbar from '@/app/components/rightNavbar';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return(
    <div className="flex sm:px-14 px-2 justify-between items-center w-full mb-4">
        <Link href="">
            <div className='relative p-0'>
                <Image
                src="/logo.png"
                alt="logo"
                width={250}
                height={20}
                className='p-0'
                />
            </div>
        </Link>
        
        <Navbar />
        <RightNavbar />
        <BurgerNav isOpen={true}/>
    </div>
    )
}

export default Header;