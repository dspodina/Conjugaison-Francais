import Image from "next/image";
import Logo from "public/logo.svg";
import SearchButton from "src/components/SearchButton.jsx";

const Header = () => {
  return (
    <div className="container mx-auto flex h-[200px] justify-between items-center">
      <div className="">
        <Image
          src={Logo}
          alt="pa-ra-pa-parler"
          className="w-[200px] md:items-center"
        />
      </div>
      <div className="flex flex-row">
        <input className="rounded-l-lg min-h-[40px] text-center" type="text" placeholder="Type your verb ..." />
        <SearchButton />
      </div>
    </div>
  );
};

export default Header;
