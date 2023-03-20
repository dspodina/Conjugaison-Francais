import { Inter } from "@next/font/google";
import Image from "next/image";
import HowToLearn from "public/howtoLearn.png";
import learnTips1 from "public/1.svg";
import learnTips2 from "public/2.svg";
import learnTips3 from "public/3.svg";
import learnTips4 from "public/4.svg";
import learnTips5 from "public/5.svg";
import learnTips6 from "public/6.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container flex flex-col">
      <div className="text-4xl flex justify-center mt-16 font-caveat">
        <h2>How to learn french language</h2>
      </div>
      <div className="flex flex-col py-24">
        <div className="flex flex-row justify-around">
          <Image src={learnTips2} alt="" className="w-[250px]" />
          <Image src={learnTips3} alt="" className="w-[250px]" />
          <Image src={learnTips4} alt="" className="w-[250px]" />
        </div>
        <div className="flex flex-row justify-around">
          <Image src={learnTips1} alt="" className="w-[250px]" />
          <Image src={learnTips5} alt="" className="w-[250px]" />
          <Image src={learnTips6} alt="" className="w-[250px]" />
        </div>
      </div>
      <div className="text-4xl flex justify-center mt-16 font-caveat">
        <h2>Let's learn verbs!</h2>
      </div>
    </div>
  );
}
