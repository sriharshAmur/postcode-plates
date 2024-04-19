import { CiSearch } from 'react-icons/ci';
import { FaRegLightbulb } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='bg-gray-200 w-screen h-screen  '>
      <main className='flex flex-col gap-8 w-full h-full p-4 lg:p-12 container mx-auto'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='font-bold text-4xl'>Postcode Plates</h1>
          <p className='text-xl'>The Taste of Your Town, Delivered</p>
        </div>
        <div className='flex-1 grid place-items-center'>
          <div className='flex flex-col gap-12 items-center min-w-96 max-w-[800px] w-[50vw]'>
            <div className='flex items-center justify-between gap-4 border border-black py-3 px-4 rounded-lg w-full'>
              <input
                className='flex-1 bg-transparent outline-none text-lg'
                type='text'
                placeholder='Search for your postcode...'
              />
              <div className='grid place-items-center p-1 rounded-lg'>
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
                  <div
                    className='p-2 rounded-lg bg-red-200 hover:bg-red-300 text-center cursor-pointer'
                    key={postcode}>
                    {postcode}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const postcodes = [
  'CT1 2EH',
  'BS1 4DJ',
  'L4 0TH',
  'NE9 7TY',
  'SW1A 1AA',
  'CF11 8AZ',
  'M16 0RA',
  'EH1 1RE',
  'BN1 1AE',
  'CB7 4DL',
  'LS2 7HY',
  'G3 8AG',
  'PL4 0DW',
  'B26 3QJ',
  'DH4 5QZ',
  'BT7 1NN',
];
