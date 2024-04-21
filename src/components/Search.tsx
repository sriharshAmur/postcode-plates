'use client';

import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Suggestions from './Suggestions';

export default function Search({ fullWidth = false }) {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [postcode, setPostcode] = useState('');
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  function showError(message: string) {
    setTimeout(() => setError(''), 3000);
    setError(message);
  }

  function searchPostcode() {
    if (postcode === '') {
      console.error('Postcode is empty');
      showError('Please enter a valid postcode');
      return;
    }

    if (postcode === pathname.slice(1)) {
      console.error('Same postcode, no need to search again');
      showError('Please enter a different postcode');
      setPostcode('');
      return;
    }
    const params = new URLSearchParams(searchParams);
    push(`/${postcode}?${params.toString()}`);
  }

  const showSuggestions = isFocused && !fullWidth;

  return (
    <div
      className={clsx('box-border flex flex-col overflow-hidden min-w-96 max-w-[800px]', {
        'w-[50vw]': fullWidth,
        'w-[30vw]': !fullWidth,
      })}>
      <div
        className={clsx('flex items-center justify-between gap-2  p-1 w-full', {
          'rounded-lg border-black border': !error,
          'rounded-t-lg border-t border-l border-r': error || showSuggestions,
          'rounded-b-none border-b-0': showSuggestions,
          'border-red-300': error,
        })}>
        <input
          className='py-3 pl-4 flex-1 bg-transparent outline-none text-lg'
          type='text'
          placeholder='Search for your postcode...'
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && searchPostcode()}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div
          onClick={searchPostcode}
          className='grid place-items-center p-2 mr-2 cursor-pointer border-black rounded-lg hover:bg-gray-300 '>
          <CiSearch
            size={28}
            color='black'
          />
        </div>
      </div>

      <div className='relative'>
        {error !== '' ? (
          <div className='text-red-700 bg-red-200 px-1 w-full py-1 rounded-b-lg'>{error}</div>
        ) : showSuggestions ? (
          <div className='border border-black p-1 rounded-b-lg'>
            <div className='overflow-auto'>
              <Suggestions mini />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
