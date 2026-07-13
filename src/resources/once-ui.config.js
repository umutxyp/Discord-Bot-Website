import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

const heading = Outfit({
    variable: "--font-heading",
    subsets: ["latin"],
    display: "swap"
});

const body = Inter({
    variable: "--font-body",
    subsets: ["latin"],
    display: "swap"
});

const label = Inter({
    variable: "--font-label",
    subsets: ["latin"],
    display: "swap"
});

const code = JetBrains_Mono({
    variable: "--font-code",
    subsets: ["latin"],
    display: "swap"
});

export const fonts = { heading, body, label, code };

export const style = {
    theme: "dark",
    neutral: "slate",
    brand: "blue",
    accent: "cyan",
    solid: "contrast",
    solidStyle: "flat",
    border: "conservative",
    surface: "filled",
    transition: "all",
    scaling: "80"
};
