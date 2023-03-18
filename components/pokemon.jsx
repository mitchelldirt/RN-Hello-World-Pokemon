import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Image, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

async function queryPokemonApi(name) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);

  if (data.status !== 200) {
    throw new Error('Failed to fetch pokemon: ' + name);
  }

  const json = await data.json();
  return json;
}

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
          <Image style={styles.logo} source={{ uri: query.data.sprites.front_default}} />
        </View>
  )
}