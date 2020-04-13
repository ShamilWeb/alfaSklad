import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonNavigationContainer from '../components/MainScreen/ButtonNavigationContainer';

console.log('ЗАПУСК MainScreen');

const MainScreen = ({state}) => {
  console.log('ЗАПУСК КАМПОНЕНТА MainScreen');

  return (
    <View
      style={{
        ...styles.ViewMain,
        backgroundColor: state.them.colorBlack,
        padding: state.them.paddingScreens,
      }}>
      <ButtonNavigationContainer
        title="Найти позицию"
        routScreen="FindPosition"
      />
      <ButtonNavigationContainer title="Раскинуть товар" routScreen="Main" />
    </View>
  );
};

styles = StyleSheet.create({
  ViewMain: {
    flex: 1,

    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default MainScreen;
