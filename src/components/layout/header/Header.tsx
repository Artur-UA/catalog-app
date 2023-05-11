import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: FC  = () => {
    
    const {pathname} = useRouter();
    console.log(pathname);
    
    return (
        <header className="flex items-center w-full justify-center	">
            <Link href='/' className={`${pathname === '/'? 'text-green-600' : ''} mx-10 p-2.5 text-lg text-gray-700 transition-colors ease-in-out  hover:underline underline-offset-2`}>
                Home
            </Link>
            <Link href='/contact' className={`${pathname === '/contact'? 'text-green-600' : ''} mx-10 p-2.5 text-lg text-gray-700 transition-colors ease-in-out  hover:underline underline-offset-2`}>
                Contact
            </Link>
        </header>
    )
}

export default Header;