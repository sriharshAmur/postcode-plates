import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang='en'>
      <body className={inter.className}>
        <div className='bg-gray-200 w-screen h-screen'>{children}</div>
      </body>
    </html>
  );
}
