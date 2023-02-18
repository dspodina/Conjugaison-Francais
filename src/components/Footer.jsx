import Link from 'next/link'

const Footer = () => {
  return (
    <div className="container mx-auto bg-greenish h-[70px] text-[18px] lg:flex items-center">
        <p className='justify-start'>©2023 - Pa-ra-pa-parler. All rights reserved.</p>
        <div className="flex justify-around lg:w-1/2">
            <button className="">
                <Link href="/privacy policy" className="">Privacy policy</Link>
            </button>
            <button className="">
                <Link href="/about us" className="">About us</Link>
            </button>          
        </div>
    </div>
  );
};

export default Footer;