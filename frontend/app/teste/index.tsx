import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Country {
  name: string;
  code: string;
}

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('/api/countries');
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Available Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.code}>
            <Link href={`/country/${country.code}`}>
              <a>{country.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
