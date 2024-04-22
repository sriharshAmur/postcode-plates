'use client';

import { Restaurant } from '@/@types/restaurant';
import { useState } from 'react';
import { IoGridOutline } from 'react-icons/io5';
import { BsViewStacked } from 'react-icons/bs';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import RestaurantView from '@/components/RestaurantView';

export type ViewType = 'grid' | 'list';

export default function Restaurants({ restaurants, postcode }: { restaurants: Restaurant[]; postcode: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [viewType, setViewType] = useState<ViewType>((searchParams.get('view')?.toString() as ViewType) || 'grid');

  function changeView(view: ViewType) {
    const params = new URLSearchParams(searchParams);
    params.set('view', view);
    replace(`${pathname}?${params.toString()}`);
    setViewType(view);
  }

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-end md:items-end justify-between pb-2 border-b border-black'>
        <div className='flex-1 hidden md:block invisible'></div>
        <div className='flex-1 text-center '>
          Showing <span className='font-semibold  text-orange-500'>10</span> Results for{' '}
          <span className='font-bold font-comfortaa text-orange-500'>{postcode}.</span>
        </div>
        <div className='md:flex-1 items-center justify-end gap-1 hidden md:flex'>
          <div
            className={clsx('grid place-items-center cursor-pointer  rounded-lg p-2', {
              'bg-orange-500 text-white hover:bg-orange-500': viewType === 'grid',
              'hoverLbg-gray-200': viewType === 'list',
            })}
            onClick={() => changeView('grid')}>
            <IoGridOutline size={20} />
          </div>
          <div
            className={clsx('grid place-items-center cursor-pointer rounded-lg p-2', {
              'bg-orange-500 text-white hover:bg-orange-500': viewType === 'list',
              'hover:bg-gray-200': viewType === 'grid',
            })}
            onClick={() => changeView('list')}>
            <BsViewStacked size={20} />
          </div>
        </div>
      </div>
      <div
        className={clsx('grid gap-4 items-stretch', {
          'grid-cols-1': viewType === 'list',
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': viewType === 'grid',
        })}>
        {restaurants.map((r, index) => (
          <RestaurantView
            key={r.id}
            restaurant={r}
            rowIndex={index + 1}
            view={viewType}
          />
        ))}
      </div>
    </div>
  );
}
