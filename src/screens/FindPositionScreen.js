import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputProductContainer from '../components/FindPositionScreen/InputProductContainer';

console.log('ЗАПУСК FindPositionScreen');

const FindPositionScreen = () => {
  console.log('ЗАПУСК КАМПОНЕНТА FindPositionScreen');

  return (
    <View style={styles.view}>
      <InputProductContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
  },
});

export default FindPositionScreen;
