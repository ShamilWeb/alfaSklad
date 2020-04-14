import React from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {useState} from 'react';

console.log('ЗАПУСК InputProduct');

const InputProduct = ({getExpectProducts, colorBlack}) => {
  console.log('ЗАПУСК КАМПОНЕНТА InputProduct');

  return (
    <TextInput
      style={{...styles.TextInput, borderColor: colorBlack}}
      onChangeText={value => getExpectProducts(value)}
      placeholder="ПОИСК"
    />
  );
};

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 2,
    borderStyle: 'solid',
    width: '90%',
    borderRadius: 100,
    marginTop: 15,
    textAlign: 'center',
  },
});

export default InputProduct;
