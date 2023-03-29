import { Inter } from "@next/font/google";
// import Image from "next/image";
// import learnTips1 from "public/1.svg";
// import learnTips2 from "public/2.svg";
// import learnTips3 from "public/3.svg";
// import learnTips4 from "public/4.svg";
// import learnTips5 from "public/5.svg";
// import learnTips6 from "public/6.svg";
import LetsPlayButton from "@/components/Buttons/LetsPlayBtn.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl flex justify-center mt-12 mb-12 font-caveat">
          About Pa-ra-pa Parler
        </h2>
        <div className="flex mx-8 lg:w-2/3 text-lg mb-16">
          <p className="text-center">
            Bonjour and welcome to Pa-ra-pa Parler!
            As junior WebDeveloper and french language enthusiast I created an
            app for practicing french verb conjugation fun and easy. An
            interface is user-friendly and allows you to select the verb and
            tense you want to practice, with examples and hints to guide you
            along the way. I'm constantly updating and improving my project to
            make language learning more accessible and enjoyable.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mb-24">
        {/* <h2 className="text-4xl font-caveat my-12">Let's play!</h2> */}
        <LetsPlayButton />
      </div>
      {/* <div className="flex flex-col justify-around">
        <div className="text-4xl flex justify-center mt-16 font-caveat">
          <h2>Tips how to learn French</h2>
        </div>
        <div className="py-24">
          <div className="grid grid-cols-2 lg:grid-cols-3">
            <Image src={learnTips2} alt="" className="w-[300px]" />
            <Image src={learnTips3} alt="" className="w-[300px]" />
            <Image src={learnTips4} alt="" className="w-[300px]" />
            <Image src={learnTips1} alt="" className="w-[300px]" />
            <Image src={learnTips5} alt="" className="w-[300px]" />
            <Image src={learnTips6} alt="" className="w-[300px]" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
