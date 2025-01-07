export interface Country {
    id: string;
    name: string;
    capital: string;
    region: string;
    population: number;
    flag: string;
    borders?: string[];
    flagUrl?: string;
  }
  
  export interface PopulationData {
    year: number;
    population: number;
  }
  