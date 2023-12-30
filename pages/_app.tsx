import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <Link
        href="/"
        className="text-3xl font-bold underline underline-offset-2"
      >
        Patrick Bateman's Majestic Business Card Generator
      </Link>
      <Component {...pageProps} />
    </div>
  );
}
