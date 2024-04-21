import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import { PiBowlFoodFill } from 'react-icons/pi';
import { FaLocationDot } from 'react-icons/fa6';
import { Restaurant } from '@/@types/restaurant';
import { ViewType } from '@/app/[postcode]/Results';
import clsx from 'clsx';

export default function RestaurantView({
  restaurant,
  rowIndex,
  view,
}: {
  restaurant: Restaurant;
  rowIndex: number;
  view: ViewType;
}) {
  return (
    <div
      className={clsx(
        'flex flex-col border border-zinc-300 hover:border-orange-500 hover:drop-shadow bg-zinc-100 cursor-pointer  rounded-lg',
        {
          'md:flex-row': view === 'list',
        }
      )}>
      {/* Image */}
      <div
        className={clsx('relative box-border min-h-[200px]', {
          'min-w-[250px] md:w-[10vw] md:min-h-[150px]': view === 'list',
        })}>
        <Image
          src={`/food/${rowIndex}.jpg`}
          alt={restaurant.name}
          fill={true}
          className={clsx('aspect-square object-cover rounded-t-lg', {
            'md:rounded-l-lg rounded-t-none': view === 'list',
          })}
        />
        <div className='w-16 h-16 absolute bottom-2 left-2 rounded'>
          <Image
            src={restaurant.logoUrl}
            alt={restaurant.name}
            fill={true}
            className='aspect-square object-cover'
          />
        </div>
      </div>

      {/* Details */}
      <div
        className={clsx('flex flex-col gap-2 p-4', {
          'flex-1': view === 'list',
        })}>
        <div className='flex items-start justify-between gap-2 mb-4'>
          <h2 className='font-josefin_sans text-xl font-bold'>{restaurant.name}</h2>
          <div className='flex items-center gap-1 text-orange-500'>
            <div className='grid place-items-center'>
              <FaStar />
            </div>
            <div>{restaurant.rating.starRating}</div>
            <div>({restaurant.rating.count})</div>
          </div>
        </div>
        <div className='flex items-start gap-2'>
          <div>
            <PiBowlFoodFill size={20} />
          </div>
          <div className='font-comfortaa'>
            {restaurant.cuisines.map((cuisine, index) => (
              <span key={cuisine.name}>
                <span
                  className={clsx('p-1 rounded', {
                    'bg-purple-200 text-purple-600': cuisine.name === 'Deals',
                    'bg-green-100 text-green-600': cuisine.name === 'Collect stamps',
                    'bg-red-100 text-red-600': cuisine.name === 'Low Delivery Fee',
                  })}>
                  {cuisine.name}
                </span>
                {index < restaurant.cuisines.length - 1 && ', '}
              </span>
            ))}
          </div>
        </div>
        <div className='flex items-start gap-2'>
          <div className='grid place-items-center'>
            <FaLocationDot size={20} />
          </div>
          <div className='font-comfortaa'>
            {restaurant.address.firstLine}, {restaurant.address.city} - {restaurant.address.postalCode}
          </div>
        </div>
      </div>
    </div>
  );
}
