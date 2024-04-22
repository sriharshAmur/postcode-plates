import type { Metadata } from 'next';
import { Raleway, Montserrat, Caveat, Josefin_Sans, Comfortaa } from 'next/font/google';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'], display: 'swap', variable: '--font-raleway' });
const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', variable: '--font-montserrat' });
const caveat = Caveat({ subsets: ['latin'], display: 'swap', variable: '--font-caveat' });
const josefin_sans = Josefin_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-josefin-sans' });
const comfortaa = Comfortaa({ subsets: ['latin'], display: 'swap', variable: '--font-comfortaa' });

export const metadata: Metadata = {
  title: 'Postcode Plates',
  description: 'The Taste of Your Town, Delivered',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={` ${caveat.variable} ${raleway.variable} ${montserrat.variable} ${josefin_sans.variable} ${comfortaa.variable} `}>
      <body className='font-montserrat'>
        <div className='w-full h-[100dvh] md:h-full min-h-screen flex flex-col bg-zinc-50'>{children}</div>
      </body>
    </html>
  );
}
