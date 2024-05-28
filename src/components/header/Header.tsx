import Image from "next/image";
import Logo from '@/../public/assets/logo/logo.svg'
import { LuAlignJustify } from "react-icons/lu";


export default function Header(){
    return(
        <header className='w-[98%] mx-auto border h-20 py-2 px-2 bg-amber-50 my-1 rounded-lg'>
            <div className="lg:hidden flex items-center justify-between px-1">
                <Image src={Logo} alt="logoSite" width={130}/>
                <LuAlignJustify size={40} color="#374151"/>
            </div>

            <div className="lg:flex lg:items-center justify-between px-1 hidden">
                <Image src={Logo} alt="logoSite" width={150}/>
                <nav>
                    <ul className="uppercase flex gap-5 text-base lg:text-lg lg:gap-6 xl:text-xl xl:gap-8 2xl:gap-[5rem]">
                        <li className="px-4 py-1 cursor-pointer bg-seagull-100 rounded-lg hover:bg-seagull-200 transition-colors"><a href='/'>home</a></li>
                        <li className="px-3 py-1 cursor-pointer bg-seagull-100 rounded-lg hover:bg-seagull-200 transition-colors"><a href="/hotel">hotel</a></li>
                        <li className="px-3 py-1 cursor-pointer bg-seagull-100 rounded-lg hover:bg-seagull-200 transition-colors"><a href="/acomodacao">acomodações</a></li>
                        <li className="px-3 py-1 cursor-pointer bg-seagull-100 rounded-lg hover:bg-seagull-200 transition-colors"><a href="/lazer">lazer</a></li>
                        <li className="px-3 py-1 cursor-pointer bg-seagull-100 rounded-lg hover:bg-seagull-200 transition-colors"><a href="/contato">contato</a></li>
                        <li className="px-3 py-1 cursor-pointer bg-seagull-100 rounded-lg hover:bg-seagull-200 transition-colors"><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}