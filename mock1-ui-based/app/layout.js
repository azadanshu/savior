'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ZCOOL_KuaiLe, Poppins, Shojumaru } from 'next/font/google';

const zcool = ZCOOL_KuaiLe({
  weight: '400',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const shojumaru = Shojumaru({
  weight: '400',
  subsets: ['latin'],
});

const theme = extendTheme({
  fonts: {
    zcool: zcool.style.fontFamily,
    poppins: poppins.style.fontFamily,
    shojumaru: shojumaru.style.fontFamily,
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}