import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

console.log('ЗАПУСК MainScreen');

const MainScreen = () => {
  console.log('ЗАПУСК КАМПОНЕНТА MainScreen');

  return (
    <View style={styles.ViewMain}>
      <Text>sefdf</Text>
    </View>
  );
};

styles = StyleSheet.create({
  ViewMain: {
    backgroundColor: '#333333',
    flex: 1,
  },
});

export default MainScreen;
