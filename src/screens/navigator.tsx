import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Item from '../models/item';
import HomeScreen from './home';
import ItemScreen from './item';
import LoginScreen from './login';

type StackParamList = {
  Home: undefined;
  Login: undefined;
  Item: { item: Item };
};

const Navigator: React.FC = () => {
  const Stack = createNativeStackNavigator<StackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Item"
          component={ItemScreen}
          options={({ route }) => ({ title: route.params.item.nome })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { type StackParamList };
export default Navigator;
