import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import ConjugaisonButton from "@/components/Buttons/ConjugaisonButton.jsx"
import LetsPlayButton from "@/components/Buttons/LetsPlayButton.jsx"

const Header = () => {
  return (
    <div className="container mx-auto flex h-[200px] justify-between items-center">
      <div className="">
      <Link href="/">
        <Image src={Logo} alt="pa-ra-pa-parler" className="w-[200px] md:items-center" />
      </Link>
      </div>
      <div className="flex flex-row text-center w-1/2 justify-around">
        <ConjugaisonButton />
        <LetsPlayButton />
      </div>
    </div>
  );
};

export default Header;
