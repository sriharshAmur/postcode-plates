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
      className={clsx('flex flex-col border border-black rounded-lg', {
        'md:flex-row': view === 'list',
      })}>
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
            'md:rounded-l-lg': view === 'list',
          })}
        />
        <div className='w-16 h-16 absolute bottom-2 left-2'>
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
        className={clsx('flex flex-col gap-1 p-4', {
          'flex-1': view === 'list',
        })}>
        <div className='flex items-center justify-between gap-2 mb-4'>
          <h2 className='text-xl font-bold'>{restaurant.name}</h2>
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
            {restaurant.address.firstLine}, {restaurant.address.city} - {restaurant.address.postalCode}
          </div>
        </div>
      </div>
    </div>
  );
}
