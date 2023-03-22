import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import ConjugaisonButton from "@/components/Buttons/ConjugaisonButton.jsx";
import LetsPlayButton from "@/components/Buttons/LetsPlayButton.jsx";
import SearchResultButton from "src/components/Buttons/SearchResult.jsx";

const Header = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row mb-16 lg:mb-0 h-[200px] justify-between items-center">
      <div className="">
        <Link href="/">
          <Image
            src={Logo}
            alt="pa-ra-pa-parler"
            className="w-[200px] md:items-center"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-end">
          <input
            type="text"
            placeholder="Voir conjugaison du verbe"
            className="rounded-l-lg pl-4 min-h-[40px] min-w-[200px]"
          />
          <SearchResultButton />
        </div>
      </div>
  );
};

export default Header;
