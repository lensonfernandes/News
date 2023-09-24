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
          className={"bg-gray-100 dark:bg-zinc-900 transition-all duration-700"}
        >
          <Header />
          <div className="max-w-6xl ">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
