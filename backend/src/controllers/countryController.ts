import { Request, Response } from 'express'
import httpConnector from '../connectors/httpConnector'

const API_URL = 'https://date.nager.at/api/v3'
const POPULATION_DATA_API_URL= 'https://countriesnow.space/api/v0.1/countries/population';
const FLAG_API_URL = 'https://countriesnow.space/api/v0.1/countries/flag/images';


class CountryController {
    // Get Available Countries
  async getAvailableCountries(req: Request, res: Response) {
    try {
      const countries = await httpConnector.get(API_URL + '/AvailableCountries')
      res.json(countries)
    } catch (error) {
      res.status(500).json({ error })
    }
  }

  //Get Country Info
  async getCountryInfo(req: Request, res: Response) {
    const { countryCode } = req.params;
  
    try {
      const countryInfo = await httpConnector.get(`${API_URL}/CountryInfo/${countryCode}`);
  
      const populationData = await httpConnector.get(POPULATION_DATA_API_URL);
  
      const population = populationData.data.find((c: any) => c.country.toLowerCase() === countryInfo.commonName.toLowerCase());
  
      const flagData = await httpConnector.get(FLAG_API_URL);
  
      const flag = flagData.data.find((c: any) => c.name.toLowerCase() === countryInfo.commonName.toLowerCase());
  
      const response = {
        countryCode,
        borders: countryInfo.borders || [],
        population: population ? population.populationCounts : [],
        flag: flag ? flag.flag : null,
      };
  
      res.json(response);
    } catch (error) {
      console.error(`Error fetching data for country ${countryCode}:`, error);
      res.status(500).json({ error: 'Failed to fetch country information.' });
    }
  }
  
  

}

export default new CountryController()
