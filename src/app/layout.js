import './globals.css'
import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"

export default function RootLayout({ children }) {
  return (
    <>
      <Header />  
      <body>{children}</body>
      <Footer />
    </>
  )
}
