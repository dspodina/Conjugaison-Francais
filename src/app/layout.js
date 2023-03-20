import "./globals.css";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
