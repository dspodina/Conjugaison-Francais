import Image from "next/image";
import Logo from "public/logo.png"

const Header = () => {
  return (
    <div className="container mx-auto h-[200px] text-[18px] lg:flex justify-between items-center">
    <Image src={Logo}  alt="pa-ra-pa-parler" className="w-[200px] pt-12 md:items-center" />
        <div className="flex justify-around lg:w-1/2 ">
           <input type="text" />     
        </div>
    </div>
  );
};

export default Header;