import { geolocation } from '@vercel/edge';

export function GET(request: Request) {
  const { city, country, region } = geolocation(request);
  //   const ip = ipAddress(request);
  return Response.json({ city, country, region });
}
