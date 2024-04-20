import Search from '@/components/Search';
import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex flex-col gap-8 w-full h-full p-4 lg:p-12 container mx-auto '>
      <div className='flex flex-col md:flex-row items-center md:justify-between gap-4 justify-center w-full relative'>
        <h1 className='flex-1 font-bold text-2xl '>
          <Link href='/'>Postcode Plates</Link>
        </h1>
        <div className='flex-1'>
          <Search />
        </div>
        <div className='flex-1 invisible '></div>
      </div>
      <div>{children}</div>
    </main>
  );
}
