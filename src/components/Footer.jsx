import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-greenish h-[70px] text-lg lg:flex">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="flex justify-start lg:w-1/2 items-center">
          <p>©2023 - Pa-ra-pa-parler. All rights reserved.</p>
        </div>
        <div className="lg:w-1/2 pb-4 lg:py-6 flex justify-around">
          <Link href="/privacy policy">Privacy policy</Link>
          <Link href="/about-us">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;