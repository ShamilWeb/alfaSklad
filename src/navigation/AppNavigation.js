import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import FindPositionScreen from '../screens/FindPositionScreen';
import React from 'react';

console.log('ЗАПУСК AppNavigation');

const Stack = createStackNavigator();

const AppNavigation = () => {
  console.log('ЗАПУСК КОМПАНЕНТА AppNavigation');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="FindPosition" component={FindPositionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
