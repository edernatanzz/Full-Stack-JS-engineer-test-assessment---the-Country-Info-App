import { notFound } from 'next/navigation';

interface Props {
  params: {
    countryCode: string;
  };
}

const CountryDetails = async ({ params }: Props) => {
  const { countryCode } = params;

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:1080/api';
  const response = await fetch(`${backendUrl}/countries/${countryCode}`, {
    next: { revalidate: 60 }, // Cache por 60 segundos
  });

  if (!response.ok) {
    notFound();
  }

  const country = await response.json();

  return (
    <div>
      <h1>Details for {countryCode.toUpperCase()}</h1>
      <img src={country.flag} alt={`${countryCode} flag`} width={300} />
      <h2>Borders</h2>
      <ul>
        {country.borders.map((border: any) => (
          <li key={border.countryCode}>
            {border.commonName} ({border.officialName})
          </li>
        ))}
      </ul>
      <h2>Population Over Years</h2>
      <ul>
        {country.population.map((pop: any) => (
          <li key={pop.year}>
            {pop.year}: {pop.value.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDetails;
