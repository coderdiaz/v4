import 'tailwindcss/tailwind.css';
import '@/assets/css/prose.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import * as galite from 'ga-lite';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      galite('create', 'UA-169353371-1', 'auto');
      galite('send', 'pageview');
    }
  }, []);

  return <Component {...pageProps} />
}

export default MyApp