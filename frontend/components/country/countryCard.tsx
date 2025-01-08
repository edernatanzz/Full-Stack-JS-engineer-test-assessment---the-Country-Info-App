'use client';

import { Country } from '@/types/Country';
import styled from 'styled-components';

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

const Card = styled.div`
  background-color: var(--color-white);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 12px var(--color-shadow);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px var(--color-shadow);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: var(--color-primary-gradient-start); 
`;

const CountryCard = ({ country, onClick }: CountryCardProps) => {
  return (
    <Card onClick={onClick}>
      <Image src={country.flagUrl} alt={country.name} />
      <Name>{country.name}</Name>
    </Card>
  );
};

export default CountryCard;

