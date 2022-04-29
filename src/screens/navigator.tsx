import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './home';
import LoginScreen from './login';

type StackParamList = {
  Home: undefined;
  Login: undefined;
};

const Navigator: React.FC = () => {
  const Stack = createNativeStackNavigator<StackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { type StackParamList };
export default Navigator;
