import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex flex-col gap-8 w-full h-full p-4 lg:p-12 container mx-auto '>
      <div className='flex items-center justify-center w-full relative'>
        <h1 className='font-bold text-2xl absolute left-0'>
          <Link href='/'>Postcode Plates</Link>
        </h1>
        <div className='flex items-center justify-between gap-2 border border-black p-1 rounded-lg  min-w-96 max-w-[800px] w-[30vw] '>
          <input
            className='py-3 pl-4 flex-1 bg-transparent outline-none text-lg'
            type='text'
            placeholder='Search for your postcode...'
          />
          <div className='grid place-items-center p-1 pr-2 border-black rounded-lg '>
            <CiSearch
              size={28}
              color='black'
            />
          </div>
        </div>
      </div>
      <div>{children}</div>
    </main>
  );
}
