import { Country } from '../types/Country';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!backendUrl) {
  console.error('Erro: NEXT_PUBLIC_BACKEND_URL não está definido.');
  throw new Error('BACKEND_URL não configurado no arquivo .env');
}

/**
 * Busca todos os países disponíveis na API.
 * @returns Uma lista de países com dados mapeados.
 */
export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch(`${backendUrl}/countries`);
    if (!response.ok) {
      throw new Error(`Erro ao buscar países: ${response.statusText}`);
    }
    const data: Country[] = await response.json();

    return data.map((country) => ({
      ...country,
      flagUrl: `https://flagcdn.com/w320/${country.countryCode.toLowerCase()}.png`,
    }));
  } catch (error) {
    console.error('Erro ao buscar países:', error);
    throw new Error('Não foi possível obter os dados dos países');
  }
};

/**
 * Busca os dados de um país específico na API.
 * @param countryCode - Código do país (ISO Alpha-2).
 * @returns Dados detalhados do país.
 */
export const fetchCountryData = async (countryCode: string): Promise<Country> => {
  try {
    const response = await fetch(`${backendUrl}/countries/${countryCode}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('País não encontrado');
      }
      throw new Error(`Erro ao buscar dados do país: ${response.statusText}`);
    }
    const data: Country = await response.json();

    // Adicionar URL da bandeira
    data.flagUrl = `https://flagcdn.com/w320/${data.countryCode.toLowerCase()}.png`;

    return data;
  } catch (error) {
    console.error('Erro ao buscar dados do país:', error);
    throw new Error('Não foi possível obter os dados do país');
  }
};
