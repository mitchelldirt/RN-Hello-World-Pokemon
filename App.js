import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import Pokemon from './components/pokemon';

const queryClient = new QueryClient();

export default function App() {
  const [name, setName] = useState('pikachu');
  const [pokemon, setPokemon] = useState(name);

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder='Enter Pokemon Name' onChangeText={setName} value={name} />
        <Button title='Search' onPress={() => {setPokemon(name)}} />
        <Pokemon name={pokemon} />
      </View>
      </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BADA55',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
});
