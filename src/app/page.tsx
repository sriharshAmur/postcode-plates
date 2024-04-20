import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { FaRegLightbulb } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='flex flex-col gap-8 w-full h-full p-4 lg:p-12 container mx-auto'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='font-bold text-4xl'>Postcode Plates</h1>
        <p className='text-xl'>The Taste of Your Town, Delivered</p>
      </div>
      <div className='flex-1 grid place-items-center'>
        <div className='flex flex-col gap-12 items-center min-w-96 max-w-[800px] w-[50vw]'>
          <div className='flex items-center justify-between gap-2 border border-black p-1 rounded-lg w-full'>
            <input
              className='flex-1 py-3 pl-4 bg-transparent outline-none text-lg'
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
          <div className='flex flex-col items-center gap-6'>
            <div className='flex items-center gap-2 bg-red-500 px-4 py-2 w-fit rounded-lg text-white'>
              <div className='grid place-items-center'>
                <FaRegLightbulb />
              </div>
              <div>Suggested Postcodes</div>
            </div>
            <div className='w-full grid grid-cols-3 lg:grid-cols-4 gap-8'>
              {postcodes.map((postcode) => (
                <Link
                  href={`/${postcode.value}`}
                  key={postcode.value}>
                  <div className='p-2 rounded-lg bg-red-200 hover:bg-red-300 text-center cursor-pointer'>
                    {postcode.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
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
