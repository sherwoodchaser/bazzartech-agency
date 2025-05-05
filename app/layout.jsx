import { Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Outfit({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "bazzartech agency",
  description: "bazzartech agency | all about smma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.className}  antialiased h-[500vh] bg-[#0b0b0b] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
