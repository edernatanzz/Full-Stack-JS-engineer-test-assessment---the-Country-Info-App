'use client'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchCountries } from '@/services/api';
import { Country } from '@/types/Country';
import { useRouter } from 'next/navigation'; 

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const router = useRouter(); 

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const countriesData = await fetchCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error(error);
      }
    };

    loadCountries();
  }, []);

  const navigateToCountry = (countryCode: string) => {
    router.push(`/country/${countryCode.toLowerCase()}`);
  };

  return (
    <Container>
      <Title>Available Countries</Title>
      <CountryList>
        {countries.map((country) => (
          <Card key={country.countryCode} onClick={() => navigateToCountry(country.countryCode)}>
            <Image src={country.flagUrl} alt={country.name} />
            <Name>{country.name}</Name>
          </Card>
        ))}
      </CountryList>
    </Container>
  );
};

export default Home;

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
