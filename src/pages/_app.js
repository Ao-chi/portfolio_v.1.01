import "@/styles/reset.css";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

import { Montserrat, Raleway } from "next/font/google";

const raleway = Raleway({
    subsets: ["latin"],
    variable: "--font-raleway",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <main className={`${raleway.variable} ${montserrat.variable} min-h-full`}>
                <Component {...pageProps} />
            </main>
        </ThemeProvider>
    );
}
