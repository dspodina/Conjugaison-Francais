"use client"

import "./globals.css";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import ContextProvider from "./context";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <ContextProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          </ContextProvider>
        </div>
      </body>
    </html>
  );
}
