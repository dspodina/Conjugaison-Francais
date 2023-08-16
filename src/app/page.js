import { Indie_Flower } from "next/font/google";
import LetsPlayButton from "@/components/Buttons/LetsPlayBtn.jsx";

const indieFlower = Indie_Flower({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className='flex flex-col h-3/6 justify-center items-center mt-24'>
        <div className={indieFlower.className}>
          <h2 className='mb-4'>Let's learn the verbs!</h2>
        </div>
        <div className="flex mx-8 lg:w-2/3 text-lg mb-16 leading-6">
          <p className="text-center">
            Bonjour and welcome to Pa-ra-pa Parler! As a junior Web Developer and
            French language enthusiast, I created an app for practicing French
            verb conjugation in a fun and easy way. The user-friendly interface
            allows you to practice verbs with different tenses and pronouns. I'm
            constantly updating and improving my project to make language
            learning more accessible and enjoyable.
          </p>
        </div>
        <div className="mb-24">
          <LetsPlayButton />
        </div>
      </div>
    </div>
  );
}