import { Restaurant } from '@/@types/restaurant';
import Restaurants from './Restaurants';

const searchRestaurantsByPostcode = async (postcode: string): Promise<Restaurant[]> => {
  try {
    const url = `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`;
    const response = await fetch(url);
    const data = await response.json();
    const restaurants: Restaurant[] = data.restaurants;

    if (!restaurants) return [];

    const limitedRestaurants = restaurants.slice(0, 10);
    return limitedRestaurants;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default async function Postcode({ params }: { params: { postcode: string } }) {
  // const restaurants = await searchRestaurantsByPostcode(params.postcode);

  return (
    <Restaurants
      postcode={params.postcode}
      restaurants={restaurants}
    />
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
