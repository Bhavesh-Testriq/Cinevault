import type { Metadata } from "next";
import { Roboto, Sekuya, Potta_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { SpeedInsights } from '@vercel/speed-insights/next';

const roboto = Roboto({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const sekuya = Sekuya({
  weight: ["400"],
  subsets: ["latin"],
})

const pottaOne = Potta_One({
  weight: ["400"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Discover Your Next Favorite Movie | MUVIEEX",
  description: "Explore trending movies, discover hidden gems, and find something worth watching. Browse ratings, genres, trailers, and more — all in one place.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <Navbar sekuya={sekuya.className} pottaOne={pottaOne.className}/>
        {children}
        <SpeedInsights />

      </body>
    </html>
  );
}
