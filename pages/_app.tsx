import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter,Mona_Sans } from "next/font/google";
const inter = Inter({ subsets: ['latin'] });
const mona_sans = Mona_Sans({ subsets: ['latin'] });
export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className={ mona_sans.className }
   >
    <Component {...pageProps} />
    </div>
  )
}
