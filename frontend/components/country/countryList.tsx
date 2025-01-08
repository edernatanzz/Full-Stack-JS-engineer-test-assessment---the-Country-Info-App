'use client';

import styled from 'styled-components';

import CountryCard from './countryCard';
import { Country } from '@/types/Country';

interface CountryListProps {
  countries: Country[];
  onCountryClick: (countryCode: string) => void;
}

const CountryList = ({ countries, onCountryClick }: CountryListProps) => {
  return (
    <CountryListContainer>
      {countries.map((country) => (
        <CountryCard
          key={country.countryCode}
          country={country}
          onClick={() => onCountryClick(country.countryCode)}
        />
      ))}
    </CountryListContainer>
  );
};

export default CountryList;

const CountryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
`;
