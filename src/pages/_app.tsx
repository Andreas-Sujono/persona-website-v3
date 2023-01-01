import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'hooks/common/useTheme';
import { Roboto } from '@next/font/google';
import Script from 'next/script';
import '../styles/globals.css';
import '../styles/carousel3d.scss';

const fontFamily = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Andreas Sujono - Full Stack Engineer</title>
        <meta
          name="description"
          content="Andreas is a passionate and tech enthusiast with 4 years of working experience in 7 different companies with diverse industries such as robotics, ed-tech, gaming, blockchain, data, and cybersecurity company. He is well known for his website development skills in both frontend and backend sides which follow the best practice and clean architecture."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="seo, search engine optimization, Andreas Sujono, full stack engineer, hiring, frontend developer, frontend engineer, engineer, tech, student, nanyang technological university"
        />
        <link rel="icon" href="/favicon_ico/favicon.ico" />
      </Head>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1DNZP0ZK9X"
      ></Script>
      <Script id="google-tag-manager">
        {`
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-1DNZP0ZK9X');
      </script>`}
      </Script>
      <main className={fontFamily.className}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}
