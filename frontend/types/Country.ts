export interface Country {
  countryCode: string;
  name: string;
  flagUrl?: string;
  population: Array<{ year: number; value: number }>;
  borders: Array<{ countryCode: string; commonName: string }>;

}

export interface Border {
  countryCode: string;
  commonName: string;
}

export interface PopulationData {
  year: number;
  value: number;
}