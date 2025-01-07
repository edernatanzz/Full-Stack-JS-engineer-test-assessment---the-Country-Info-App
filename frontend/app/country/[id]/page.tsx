import { useQuery } from 'react-query';
import { fetchCountryById, fetchPopulationData } from '../../../services/api';
import CountryDetails from '@/components/coutryDetails';


const CountryPage = ({ params }: { params: { id: string } }) => {
  const { data: country, isLoading: countryLoading } = useQuery(['country', params.id], () =>
    fetchCountryById(params.id)
  );
  const { data: populationData, isLoading: populationLoading } = useQuery(
    ['population', params.id],
    () => fetchPopulationData(params.id)
  );

  if (countryLoading || populationLoading) return <p>Loading...</p>;

  return (
    <main>
      {country && <CountryDetails country={country} populationData={populationData || []} />}
    </main>
  );
};

export default CountryPage;
