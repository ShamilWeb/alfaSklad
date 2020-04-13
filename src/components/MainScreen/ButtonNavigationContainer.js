import React from 'react';
import ButtonNavigation from './ButtonNavigation';
import {useSelector} from 'react-redux';
import goToScreen from '../../logics/goToScreenLogics';

console.log('ЗАПУСК ButtonNavigationContainer');

const ButtonNavigationContainer = ({title, routScreen}) => {
  console.log('ЗАПУСК КАМПОНЕНТА ButtonNavigationContainer');
  let state = useSelector(state => state);

  return (
    <ButtonNavigation title={title} state={state} routScreen={routScreen} />
  );
};

export default ButtonNavigationContainer;
