import Search from '@/components/Search';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex flex-col gap-8 w-full h-full p-4 lg:p-12 container mx-auto '>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-4 w-full relative'>
        <div className='flex-1 '>
          <Link
            href='/'
            className='flex items-center gap-2 cursor-pointer w-fit'>
            <Image
              src='/logo.svg'
              alt='Postcode Plates'
              width={50}
              height={50}
            />
            <h1 className='font-raleway hidden md:block font-bold text-2xl '>Postcode Plates</h1>
          </Link>
        </div>
        <div className='flex-1 w-full md:w-fit'>
          <Suspense fallback={<div>Loading...</div>}>
            <Search />
          </Suspense>
        </div>
        <div className='flex-1 invisible '></div>
      </div>
      <div>{children}</div>
    </main>
  );
}
