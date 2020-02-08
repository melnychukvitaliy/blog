import { ReactChild } from 'react';

import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

interface IMetaProps {
  children: ReactChild;
}
export default ({ children }: IMetaProps) => (
  <div className="container">
    <Head>
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      <title>Vitaliy Melnychuk :: Personal Blog</title>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />
      <script dangerouslySetInnerHTML={{
        __html: `
      <!-- Fathom - simple website analytics - https://usefathom.com -->
      <script>
      (function(f, a, t, h, o, m){
      a[h]=a[h]||function(){
      (a[h].q=a[h].q||[]).push(arguments)
      };
      o=f.createElement('script'),
      m=f.getElementsByTagName('script')[0];
      o.async=1; o.src=t; o.id='fathom-script';
      m.parentNode.insertBefore(o,m)
      })(document, window, 'https://cdn.usefathom.com/tracker.js', 'fathom');
      fathom('set', 'siteId', 'XSTIRESH');
      fathom('trackPageview');
      </script>
      <!-- / Fathom -->
      `}} />
    </Head>
    <Header />
    {children}
    <Footer />
    <style jsx global>{`
      a:link {
        color: black;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      a:visited {
      color: black;
      }
      button:hover {
        cursor: pointer;
      }
      input:focus,
      button:focus,
      textarea:focus {
        outline: none;
      }
      body {
        font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif;
        font-size: 14px;
        font-style: normal;
        font-variant: normal;
        font-weight: 400;
      }

      h1, h2,h3,h4,h5,h6 {
        font-style: normal;
        font-variant: normal;
        font-weight: 700;
      }
      blockquote {
        font-size: 17px;
        line-height: 23px;
      }
      pre, code{
        margin: 0;
        padding: 0;
      }
    `}</style>
    <style jsx>{`
    .container {
        max-width:828px;
        margin: 0 auto;
        padding: 5px;
      }
    `}</style>
  </div>
);
