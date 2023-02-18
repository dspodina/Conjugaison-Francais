import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Image from "next/image";
import HowToLearn from "public/howtoLearn.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="flex justify-center">
        <h2>How to learn french language</h2>
        <Image src={HowToLearn}  alt="how to learn freanch" className="flex justify-center align-center" />
      </div>       
  )
}
