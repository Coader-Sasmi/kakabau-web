import type { Metadata } from "next";

import "./globals.css";
import Sidebar from "@/layouts/Sidebar";
import Header from "@/layouts/Header";
import ResponsiveHeader from "@/layouts/ResponsiveHeader";


export const metadata: Metadata = {
  title: "Kakabau Admin Panel",
  description: "Online marketplace where vendors list and sell products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body>
        <div className="w-full overflow-hidden">
          <div className="w-full sticky top-0">
            {/* <Sidebar/> */}
            <Header/>
            <ResponsiveHeader/>
          </div>
          <div className="w-fit flex ">
            {/* <Header/> */}
            <Sidebar/>
            
            <div className=" ">
            {children}
            </div>
          </div>
        </div>
        
      </body>
    </html>
  );
}
