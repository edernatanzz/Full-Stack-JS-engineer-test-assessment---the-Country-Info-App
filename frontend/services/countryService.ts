// services/countryService.ts
import { Country } from '@/types/Country';

export const fetchCountries = async (): Promise<Country[]> => {
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:1080/api'; 

  const url = `${backendUrl}/countries`;

  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch countries');
  }

  const countries: Country[] = await response.json();

  return countries.map(country => ({
    ...country,
    flagUrl: `https://flagcdn.com/w320/${country.countryCode.toLowerCase()}.png`
  }));
};
