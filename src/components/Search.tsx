'use client';

import clsx from 'clsx';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

export default function Search({ fullWidth = false }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [postcode, setPostcode] = useState('');

  function searchPostcode() {
    if (postcode === '') return;
    replace(`/${postcode}`);
  }

  return (
    <div
      className={clsx(
        'flex items-center justify-between gap-2 border border-black p-1 rounded-lg  min-w-96 max-w-[800px]',
        {
          'w-[50vw]': fullWidth,
          'w-[30vw]': !fullWidth,
        }
      )}>
      <input
        className='py-3 pl-4 flex-1 bg-transparent outline-none text-lg'
        type='text'
        placeholder='Search for your postcode...'
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && searchPostcode()}
      />
      <div className='grid place-items-center p-2 mr-2 cursor-pointer border-black rounded-lg hover:bg-gray-300 '>
        <CiSearch
          size={28}
          color='black'
        />
      </div>
    </div>
  );
}
