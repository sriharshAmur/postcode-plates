'use client';

import clsx from 'clsx';
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
      <div className='flex items-center gap-4 text-sm py-1'>
        {postcodes.map((postcode) => (
          <Suggestion
            postcode={postcode}
            key={postcode.value}
            getPostcodeUrl={getPostcodeUrl}
            mini
          />
        ))}
      </div>
    );
  }

  return (
    <div className='flex flex-col w-full items-center gap-6 bg-zinc-100 p-4 md:px-8 border border-orange-500 rounded-lg '>
      <div className='flex items-center gap-2 text-zinc-800  px-4 py-2 w-fit rounded-lg'>
        <div className='grid place-items-center '>
          <FaRegLightbulb />
        </div>
        <div>Suggested Postcodes</div>
      </div>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
        {postcodes.map((postcode) => (
          <Suggestion
            postcode={postcode}
            key={postcode.value}
            getPostcodeUrl={getPostcodeUrl}
          />
        ))}
      </div>
    </div>
  );
}

const PostcodeType = {
  label: 'string',
  value: 'string',
};

const Suggestion = ({
  postcode,
  getPostcodeUrl,
  mini = false,
}: {
  postcode: typeof PostcodeType;
  getPostcodeUrl: (postcode: string) => string;
  mini?: boolean;
}) => (
  <Link
    href={getPostcodeUrl(postcode.value)}
    key={postcode.value}>
    <div
      onClick={(e) => {
        console.log('clikc lcikc lcick');

        e.stopPropagation();
      }}
      className={clsx(
        'p-1 text-zinc-700 text-sm rounded border border-zinc-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white text-center cursor-pointer',

        {
          'w-20': mini,
        }
      )}>
      {postcode.label}
    </div>
  </Link>
);

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
