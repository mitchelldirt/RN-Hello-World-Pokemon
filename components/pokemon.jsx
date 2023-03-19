import { useQuery } from '@tanstack/react-query';
import { Image, Text, View } from 'react-native';

// This is the query function for tanstack/react-query
async function queryPokemonApi(name) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);

  if (data.status !== 200) {
    throw new Error('Failed to fetch pokemon: ' + name);
  }

  const json = await data.json();
  return json;
}

// Queries the pokemon API and returns the pokemon image
export default function Pokemon({name}) {
  const query = useQuery({ queryKey: ['getPokemon', name], queryFn: () => queryPokemonApi(name) });

  if (query.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (query.isError) {
    return <Text>Error: {query.error.message}</Text>;
  }

  return (
        <View>          
          <Image className="w-40 h-36" source={{ uri: query.data.sprites.front_default}} />
        </View>
  )
}