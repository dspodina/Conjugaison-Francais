import { Inter } from "@next/font/google";
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
        <LetsPlayButton />
      </div>
    </div>
  );
}
