'use client';

import { Restaurant } from '@/@types/restaurant';
import { useState } from 'react';
import CardView from '@/components/CardView';
import ListView from '@/components/ListView';
import { IoGridOutline } from 'react-icons/io5';
import { TfiViewList } from 'react-icons/tfi';
import clsx from 'clsx';
import Suggestions from '@/components/Suggestions';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type ViewType = 'grid' | 'list';

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

  if (!restaurants || restaurants.length === 0)
    return (
      <div className='mt-24 w-[50vw] flex flex-col items-center mx-auto gap-8 '>
        <div className='font-bold text-red-700'>No restaurants found. Please try another Postcode.</div>
        <Suggestions />
      </div>
    );

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-end justify-between  pb-2 border-b border-black'>
        <div className='flex-1'>Sort By</div>
        <div className='flex-1 text-center'>
          Showing <span className='font-bold'>10</span> Results for <span className='font-bold'>{postcode}</span>.
        </div>
        <div className='flex-1 flex items-center justify-end gap-1'>
          <div
            className={clsx('grid place-items-center cursor-pointer hover:bg-gray-300 rounded-lg p-2', {
              'bg-gray-300': viewType === 'grid',
            })}
            onClick={() => changeView('grid')}>
            <IoGridOutline size={20} />
          </div>
          <div
            className={clsx('grid place-items-center cursor-pointer hover:bg-gray-300 rounded-lg p-2', {
              'bg-gray-300': viewType === 'list',
            })}
            onClick={() => changeView('list')}>
            <TfiViewList size={20} />
          </div>
        </div>
      </div>
      <div
        className={clsx('grid gap-4 items-stretch', {
          'grid-cols-1': viewType === 'list',
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': viewType === 'grid',
        })}>
        {restaurants.map((r) =>
          viewType === 'grid' ? (
            <CardView
              key={r.id}
              restaurant={r}
            />
          ) : (
            <ListView
              key={r.id}
              restaurant={r}
            />
          )
        )}
      </div>
    </div>
  );
}
