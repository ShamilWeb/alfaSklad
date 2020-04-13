import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useState} from 'react';

console.log('ЗАПУСК ButtonNavigation');

const ButtonNavigation = ({title, state, routScreen}) => {
  console.log('ЗАПУСК КАМПОНЕНТА ButtonNavigation');

  return (
    <TouchableOpacity
      style={{...styles.view, backgroundColor: state.them.colorWhite}}
      onPress={() => {
        state.navigation.navigate(routScreen);
      }}>
      <Text style={{...styles.text, color: state.them.colorBlack}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '70%',
    paddingVertical: '30%',

    alignItems: 'center',
    borderRadius: 50,
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default ButtonNavigation;
