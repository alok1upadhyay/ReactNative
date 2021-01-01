import React from 'react';

import {
  NavigationContainer,
  DarkTheme,
  
} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { useColorScheme, AppearanceProvider } from 'react-native-appearance';
import createLoginStack from './src/NavigationFlow/createLoginStack'

const Stack = createStackNavigator();

App = () => {

  const colorScheme = useColorScheme();

  

  return (
    
    <AppearanceProvider>
      <NavigationContainer>
        {createLoginStack(Stack)}
      </NavigationContainer>
    </AppearanceProvider>
  );
}

export default App;