'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Country {
  countryCode: string;
  name: string;
  flagUrl?: string;
}

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:1080/api';
  const router = useRouter();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${backendUrl}/countries`);
        const data: Country[] = await response.json();

        const countriesWithFlags = data.map((country) => ({
          ...country,
          flagUrl: `https://flagcdn.com/w320/${country.countryCode.toLowerCase()}.png`,
        }));

        setCountries(countriesWithFlags);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, [backendUrl]);

  const handleCountryClick = (countryCode: string) => {
    router.push(`/country/${countryCode.toLowerCase()}`);
  };
  

  return (
    <Container>
      <Title>Available Countries</Title>
      <CountryList>
        {countries.map((country) => (
          <Card key={country.countryCode} onClick={() => handleCountryClick(country.countryCode)}>
            <Image src={country.flagUrl} alt={country.name} />
            <Name>{country.name}</Name>
          </Card>
        ))}
      </CountryList>
    </Container>
  );
};

export default Home;

// Styled Components
const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 40px;
  color: #202124;
`;

const CountryList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  gap: 20px;
  justify-items: center;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
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
  color: #202124;
`;
