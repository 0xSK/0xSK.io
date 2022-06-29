// import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
// import React from 'react';
// import Script from 'next/script';

// type Props = {};

// class Document extends NextDocument<Props> {
//   render() {
//     return (
//       <Html>
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//           <Script
//             src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
//             strategy="beforeInteractive"
//             onLoad={() => console.log(`jquery loaded`)}
//           />
//         </body>
//       </Html>
//     );
//   }
// }

// export default Document;

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html style={{scrollBehavior:'smooth'}}>
      <Head>
        {/* Favicon etc. */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />

        {/* <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          type="text/javascript"
          async
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js"
          type="text/javascript"
          async
          defer
        /> */}
        <script
          type="text/javascript"
          data-website-id="2b817891-fbe8-49ba-b0af-17ef69e7f4a4"
          src="https://umami-0xsk.vercel.app/count.js"
          async
          defer
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
