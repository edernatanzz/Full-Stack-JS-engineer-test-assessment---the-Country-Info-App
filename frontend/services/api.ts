import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = 'https://date.nager.at/api/v3';
const POPULATION_DATA_API_URL = 'https://countriesnow.space/api/v0.1/countries/population';
const FLAG_API_URL = 'https://countriesnow.space/api/v0.1/countries/flag/images';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    if (req.query.countryCode) {
      const { countryCode } = req.query;

      try {
        const countryInfo = await fetch(`${API_URL}/CountryInfo/${countryCode}`);
        const countryData = await countryInfo.json();

        const populationData = await fetch(POPULATION_DATA_API_URL);
        const populationDataJson = await populationData.json();

        const flagData = await fetch(FLAG_API_URL);
        const flagDataJson = await flagData.json();

        const population = populationDataJson.data.find(
          (c: any) => c.country.toLowerCase() === countryData.commonName.toLowerCase()
        );

        const flag = flagDataJson.data.find(
          (c: any) => c.name.toLowerCase() === countryData.commonName.toLowerCase()
        );

        const response = {
          countryCode,
          borders: countryData.borders || [],
          population: population ? population.populationCounts : [],
          flag: flag ? flag.flag : null,
        };

        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch country information.' });
      }
    } else {
      try {
        const countries = await fetch(`${API_URL}/AvailableCountries`);
        const countriesData = await countries.json();
        res.status(200).json(countriesData);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch countries.' });
      }
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
