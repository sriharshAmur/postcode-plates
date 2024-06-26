import Search from '@/components/Search';
import Suggestions from '@/components/Suggestions';
import Image from 'next/image';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className='flex flex-col gap-8 w-full flex-1 p-4 lg:p-12 container mx-auto'>
      <div className='flex flex-col items-center gap-4'>
        <Image
          src='/logo.svg'
          alt='Postcode Plates'
          width={80}
          height={80}
        />
        <h1 className='font-raleway font-bold text-4xl'>Postcode Plates</h1>
        <p className='font-caveat text-2xl text-orange-500'>The Taste of Your Town, Delivered</p>
      </div>
      <div className='flex-1 grid place-items-center'>
        <div className='flex flex-col gap-8 md:gap-12 items-center md:min-w-96 max-w-[800px] w-full md:w-[50vw]'>
          <Suspense fallback={<div>Loading...</div>}>
            <Search fullWidth />
            <Suggestions />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
