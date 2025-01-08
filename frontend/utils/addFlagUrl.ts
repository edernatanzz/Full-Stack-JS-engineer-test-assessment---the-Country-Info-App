import { useRouter } from 'next/navigation';

export const useNavigateToCountry = () => {
  const router = useRouter();

  const navigateToCountry = (countryCode: string) => {
    router.push(`/country/${countryCode.toLowerCase()}`);
  };

  return navigateToCountry;
};
