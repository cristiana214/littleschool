import {
  Comfortaa,
  Inter as FontSans,
  Montserrat,
  Roboto,
  Work_Sans,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Load the fonts
export const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const fontComfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

export const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const fontEuropa = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-europa", // Custom CSS variable
});
