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

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://andreassujono.com/" />
        <meta
          property="og:title"
          content="Andreas Sujono - Full Stack Engineer"
        />
        <meta
          property="og:description"
          content="Andreas is a passionate and tech enthusiast with 4 years of working experience in 7 different companies with diverse industries such as robotics, ed-tech, gaming, blockchain, data, and cybersecurity company. He is well known for his website development skills in both frontend and backend sides which follow the best practice and clean architecture."
        />
        <meta
          property="og:image"
          content="https://andreas-general2.s3.ap-southeast-1.amazonaws.com/andreassujono/personal-website-og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://andreassujono.com/" />
        <meta
          property="twitter:title"
          content="Andreas Sujono - Full Stack Engineer"
        />
        <meta
          property="twitter:description"
          content="Andreas is a passionate and tech enthusiast with 4 years of working experience in 7 different companies with diverse industries such as robotics, ed-tech, gaming, blockchain, data, and cybersecurity company. He is well known for his website development skills in both frontend and backend sides which follow the best practice and clean architecture."
        />
        <meta
          property="twitter:image"
          content="https://andreas-general2.s3.ap-southeast-1.amazonaws.com/andreassujono/personal-website-og.png"
        />
      </Head>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1DNZP0ZK9X"
      ></Script>
      <Script id="google-tag-manager">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-1DNZP0ZK9X');
        `}
      </Script>
      <main className={fontFamily.className}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}
