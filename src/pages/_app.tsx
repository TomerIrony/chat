import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function App({ Component, pageProps }: AppProps) {
  // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  return <Component {...pageProps} />
}
