'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useParams } from 'next/navigation';
import { Country } from '@/types/Country';
import { fetchCountryData } from '@/services/api';
import { useNavigateToCountry } from '@/utils/addFlagUrl';
import LoadingSpinner from '@/components/loading/spinner';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CountryDetails = () => {
  const { countryCode } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const navigateToCountry = useNavigateToCountry();

  useEffect(() => {
    const loadCountryData = async () => {
      try {
        const data = await fetchCountryData(countryCode);
        setCountry(data);
      } catch (error) {
        console.error('Error loading country data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (countryCode) {
      loadCountryData();
    }
  }, [countryCode]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!country) {
    return (
      <div>
        <p>Country not found</p>
      </div>
    );
  }

  const populationYears = country.population.map((p) => p.year);
  const populationValues = country.population.map((p) => p.value);

  const chartData = {
    labels: populationYears,
    datasets: [
      {
        label: 'Population',
        data: populationValues,
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <PageContainer>
      <StyledCard>
        <CardHeader>
          <div>
            <CardTitle>{country.name}</CardTitle>
            <p>Country Code: {countryCode.toUpperCase()}</p>
          </div>
          <FlagImage src={country.flag} alt={`${country.name} flag`} />
        </CardHeader>
      </StyledCard>

      <StyledCard>
        <CardHeader>
          <CardTitle>Neighboring Countries</CardTitle>
        </CardHeader>
        <CardContent>
          {country.borders.length > 0 ? (
            country.borders.map((border) => (
              <Badge
                key={border.countryCode}
                onClick={() => navigateToCountry(border.countryCode)}
              >
                {border.commonName}
              </Badge>
            ))
          ) : (
            <p>No neighboring countries available.</p>
          )}
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardHeader>
          <CardTitle>Population Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={chartData} options={chartOptions} />
        </CardContent>
      </StyledCard>
    </PageContainer>
  );
};

export default CountryDetails;

const PageContainer = styled.div`
  padding: 6rem 2rem 2rem;
  max-width: 1280px;
  margin: auto;
  background-color: #f9fafb;
  min-height: 100vh;
`;

const StyledCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 2rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #7f53ac, #647dee);
  color: #fff;
  padding: 1.5rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

const FlagImage = styled.img`
  height: 5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const Badge = styled.button`
  background-color: #ebf8ff;
  color: #3182ce;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  cursor: pointer;
  border: none;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: #bee3f8;
  }
`;
