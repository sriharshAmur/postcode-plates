import Search from '@/components/Search';
import Link from 'next/link';

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
        <Search />
      </div>
      <div>{children}</div>
    </main>
  );
}
