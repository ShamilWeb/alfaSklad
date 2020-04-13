import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreenContainer from '../screens/MainScreenContainer';
import FindPositionScreen from '../screens/FindPositionScreen';
import them from '../global/them';
import React from 'react';

console.log('ЗАПУСК AppNavigation');

const Stack = createStackNavigator();

const AppNavigation = () => {
  console.log('ЗАПУСК КОМПАНЕНТА AppNavigation');
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: them.colorWhite,
          },
          title: '',
        }}>
        <Stack.Screen name="Main" component={MainScreenContainer} />
        <Stack.Screen name="FindPosition" component={FindPositionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
