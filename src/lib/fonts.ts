import {
  Inter as FontSans,
  Comfortaa,
  Montserrat,
  Work_Sans,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Load the fonts
export const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const fontComfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
});

export const fontEuropa = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-europa",
  display: "swap", // Custom CSS variable
});
