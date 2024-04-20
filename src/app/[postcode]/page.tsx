import CardView from '@/components/CardView';
import ListView from '@/components/ListView';
import { IoGridOutline } from 'react-icons/io5';
import { TfiViewList } from 'react-icons/tfi';

export default function Postcode({ params }: { params: { postcode: string } }) {
  return (
    <main className='flex flex-col gap-12'>
      <div className='text-center'>
        Showing <span className='font-bold'>10</span> Results for <span className='font-bold'>{params.postcode}</span>.
      </div>

      <div className='flex flex-col gap-1'>
        <div className='flex items-center justify-end gap-1'>
          <div className='grid place-items-center cursor-pointer hover:bg-gray-300 rounded-lg p-2'>
            <IoGridOutline size={20} />
          </div>
          <div className='grid place-items-center cursor-pointer hover:bg-gray-300 rounded-lg p-2'>
            <TfiViewList size={20} />
          </div>
        </div>
        <div className='border border-black' />
        <div className='grid grid-cols-1 py-8 gap-4'>
          {restaurants.map((r) => (
            <div key={r.id}>
              <ListView restaurant={r} />
              {/* <CardView restaurant={r} /> */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const restaurant = {
  id: '214848',
  name: 'Fat Hippo - Shoreditch',
  uniqueName: 'fat-hippo---shoreditch-london-city',
  address: {
    city: 'London',
    firstLine: '5-9 Great Eastern Street',
    postalCode: 'EC2A 3EJ',
    location: {
      type: 'Point',
      coordinates: [-0.078201, 51.522931],
    },
  },
  rating: {
    count: 33,
    starRating: 4.2,
    userRating: null,
  },
  isNew: false,
  driveDistanceMeters: 1874,
  openingTimeLocal: '2024-04-21T11:55:00',
  deliveryOpeningTimeLocal: '2024-04-20T12:05:00',
  deliveryEtaMinutes: {
    rangeLower: 35,
    rangeUpper: 50,
  },
  isCollection: true,
  isDelivery: true,
  isOpenNowForCollection: true,
  isOpenNowForDelivery: true,
  isOpenNowForPreorder: false,
  isTemporarilyOffline: false,
  deliveryCost: 0,
  minimumDeliveryValue: 0,
  defaultDisplayRank: 0,
  isTemporaryBoost: false,
  isPremier: false,
  logoUrl: 'https://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/214848.gif',
  isTestRestaurant: false,
  deals: [
    {
      description: '25% off selected items',
      offerType: 'ItemLevelDiscount',
    },
    {
      description: 'Get a free side with any burger',
      offerType: 'Notification',
    },
  ],
  tags: [],
  cuisines: [
    {
      name: 'Burgers',
      uniqueName: 'burgers',
    },
    {
      name: 'American',
      uniqueName: 'american',
    },
    {
      name: 'Low Delivery Fee',
      uniqueName: 'low-delivery-fee',
    },
    {
      name: 'Deals',
      uniqueName: 'deals',
    },
  ],
  availability: {
    delivery: {
      isOpen: true,
      canPreOrder: false,
      isTemporarilyOffline: false,
      nextAvailability: {
        from: '2024-04-21T12:15:00',
      },
      etaMinutes: {
        rangeLower: 35,
        rangeUpper: 50,
      },
    },
    collection: {
      isOpen: true,
      canPreOrder: false,
      isTemporarilyOffline: false,
      nextAvailability: {
        from: '2024-04-21T11:55:00',
      },
      etaMinutes: {
        approximate: 24,
      },
    },
  },
};
const restaurants = Array(10).fill({ ...restaurant });
