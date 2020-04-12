import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

console.log('ЗАПУСК MainButton');

const MainButton = () => {
  console.log('ЗАПУСК КАМПОНЕНТА MainButton');

  return (
    <View>
      <TouchableOpacity style={{backgroundColor: 333333}} />
    </View>
  );
};

export default MainButton;
