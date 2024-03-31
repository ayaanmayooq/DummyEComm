import {
    JetBrains_Mono as FontMono,
    Plus_Jakarta_Sans as FontSans,
    Inter,
    Roboto
} from "next/font/google"

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
})

export const inter = Inter({
     subsets: ["latin"],
     variable: "--inter",
    })

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "500"],
    variable: "--roboto",

})