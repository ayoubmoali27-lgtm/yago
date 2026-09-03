import "./globals.css";
import { Modak, DM_Sans } from "next/font/google";

const milky = Modak({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-milky",
});

const mainFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-main",
});

export const metadata = {
  title: "Soumam",
  description: "Soumam - Yago",
  icons: {
    icon: "/assets/Soummam.png",
    shortcut: "/assets/Soummam.png",
    apple: "/assets/Soummam.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${milky.variable} ${mainFont.variable}`}>
        {children}
      </body>
    </html>
  );
}