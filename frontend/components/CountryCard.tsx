import Link from 'next/link';
import { Country } from '../types/Country';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => (
  <div>
    <img src={country.flag} alt={`${country.name} flag`} />
    <h2>{country.name}</h2>
    <Link href={`/country/${country.id}`}>View Details</Link>
  </div>
);

export default CountryCard;
