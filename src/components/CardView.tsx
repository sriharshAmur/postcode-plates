import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import { PiBowlFoodFill } from 'react-icons/pi';
import { FaLocationDot } from 'react-icons/fa6';

type Restaurant = {
  id: string;
  name: string;
  rating: {
    starRating: number;
    count: number;
  };
  address: {
    firstLine: string;
    city: string;
    postalCode: string;
  };
  cuisines: {
    name: string;
  }[];
  logoUrl: string;
};

export default function CardView({ restaurant }: { restaurant: Restaurant }) {
  return (
    <div className='flex flex-col border border-black rounded-lg'>
      <div className=' box-border m-1 min-h-[200px] relative '>
        <Image
          src='/food/1.jpg'
          alt={restaurant.name}
          fill={true}
          layout='fill'
          objectFit='cover'
          className='aspect-square'
        />
        <div className='w-12 h-12 absolute bottom-2 left-2'>
          <Image
            src={restaurant.logoUrl}
            alt={restaurant.name}
            fill={true}
            layout='fill'
            objectFit='contain'
            className='aspect-square'
          />
        </div>
      </div>
      <div className='p-4 flex flex-col gap-1'>
        <div className='flex items-center justify-between gap-2 mb-4'>
          <h2 className='text-xl  font-bold'>{restaurant.name}</h2>
          <div className='flex items-center gap-1'>
            <div className='grid place-items-center'>
              <FaStar />
            </div>
            <div>{restaurant.rating.starRating}</div>
            <div>({restaurant.rating.count})</div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div>
            <PiBowlFoodFill size={20} />
          </div>
          <div>{restaurant.cuisines.map((cuisine) => cuisine.name).join(', ')}</div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='grid place-items-center'>
            <FaLocationDot size={20} />
          </div>
          <div>
            {restaurant.address.firstLine}, {restaurant.address.city}, {restaurant.address.postalCode}
          </div>
        </div>
      </div>
    </div>
  );
}
