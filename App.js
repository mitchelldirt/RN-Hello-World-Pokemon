import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import Pokemon from './components/Pokemon';

// Initialize the query client for tanstack/react-query
const queryClient = new QueryClient();

export default function App() {
  // State to control the pokemon name
  const [name, setName] = useState('pikachu');
  const [pokemon, setPokemon] = useState(name);

  return (
    <QueryClientProvider client={queryClient}>
      <View className="w-full h-full flex flex-column items-center justify-center bg-[#BADA55]">
        <TextInput className="border-2 border-black rounded-md w-80 p-2" placeholder='Enter Pokemon Name' onChangeText={setName} value={name} />
        <Button className="bg-blue-500 text-white rounded-md p-2 mt-2" title='Search' onPress={() => { setPokemon(name) }} />
        <Pokemon name={pokemon} />
      </View>
      <StatusBar style="dark" />
    </QueryClientProvider>
  );
}
