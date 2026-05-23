import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "E-LKPD Fotosintesis",
  description: "E-LKPD Interaktif Biologi tentang Fotosintesis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${fredoka.variable} ${quicksand.variable} antialiased`}>
      <body className="font-quicksand overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
