import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Header from "./Header";
import Providers from "./Providers";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Providers>
        <body
          className={"bg-gray-100 text-zinc-900 dark:bg-zinc-900  dark:text-gray-100 transition-all duration-700"}
        >
          <Header />
          <div className="w-100  flex  flex-wrap justify-center">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
