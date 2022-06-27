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
    <Html>
      <Head>
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
