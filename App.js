import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Pokedex'>
        <Stack.Screen name='Pokedex' component={Pokedex}/>
        <Stack.Screen name='Pokémon' component={Pokemon}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}