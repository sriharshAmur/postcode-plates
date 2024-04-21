'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaRegLightbulb } from 'react-icons/fa';

export default function Suggestions({ mini = false }: { mini?: boolean }) {
  const searchParams = useSearchParams();

  function getPostcodeUrl(postcode: string) {
    const params = new URLSearchParams(searchParams);
    return `/${postcode}?${params.toString()}`;
  }

  if (mini) {
    return (
      <div className='flex items-center gap-4 text-sm'>
        {postcodes.map((postcode) => (
          <Link
            href={getPostcodeUrl(postcode.value)}
            key={postcode.value}>
            <div className='p-1 rounded-lg bg-red-200 hover:bg-red-300 text-center cursor-pointer w-20'>
              {postcode.label}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='flex items-center gap-2 bg-red-500 px-4 py-2 w-fit rounded-lg text-white'>
        <div className='grid place-items-center'>
          <FaRegLightbulb />
        </div>
        <div>Suggested Postcodes</div>
      </div>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {postcodes.map((postcode) => (
          <Link
            href={getPostcodeUrl(postcode.value)}
            key={postcode.value}>
            <div className='p-2 rounded-lg bg-red-200 hover:bg-red-300 text-center cursor-pointer'>
              {postcode.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const postcodes = [
  {
    label: 'CT1 2EH',
    value: 'CT12EH',
  },
  {
    label: 'BS1 4DJ',
    value: 'BS14DJ',
  },
  {
    label: 'L4 0TH',
    value: 'L40TH',
  },
  {
    label: 'NE9 7TY',
    value: 'NE97TY',
  },
  {
    label: 'SW1A 1AA',
    value: 'SW1A1AA',
  },
  {
    label: 'CF11 8AZ',
    value: 'CF118AZ',
  },
  {
    label: 'M16 0RA',
    value: 'M160RA',
  },
  {
    label: 'EH1 1RE',
    value: 'EH11RE',
  },
  {
    label: 'BN1 1AE',
    value: 'BN11AE',
  },
  {
    label: 'CB7 4DL',
    value: 'CB74DL',
  },
  {
    label: 'LS2 7HY',
    value: 'LS27HY',
  },
  {
    label: 'G3 8AG',
    value: 'G38AG',
  },
  {
    label: 'PL4 0DW',
    value: 'PL40DW',
  },
  {
    label: 'B26 3QJ',
    value: 'B263QJ',
  },
  {
    label: 'DH4 5QZ',
    value: 'DH45QZ',
  },
  {
    label: 'BT7 1NN',
    value: 'BT71NN',
  },
];
