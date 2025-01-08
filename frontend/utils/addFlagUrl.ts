// utils/addFlagUrl.ts
import { Country } from '@/types/Country';

export const addFlagUrl = (countries: Country[]): Country[] => {
  return countries.map(country => ({
    ...country,
    flagUrl: `https://flagcdn.com/w320/${country.countryCode.toLowerCase()}.png`,
  }));
};
