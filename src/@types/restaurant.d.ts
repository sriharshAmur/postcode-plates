export type Restaurant = {
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
