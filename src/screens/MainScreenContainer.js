import React, {useEffect} from 'react';
import MainScreen from './MainScreen';
import {useSelector, useDispatch, View} from 'react-redux';
import navigationAction from '../store/action/navigate';
import getProducts from '../logics/getProducts';
import setProducts from '../store/action/firebase';

console.log('ЗАПУСК MainScreenContainer');

const MainScreenContainer = ({navigation}) => {
  console.log('ЗАПУСК КАМПОНЕНТА MainScreenContainer');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navigationAction(navigation.navigate));
    getProducts(dispatch);
  }, [dispatch]);
  let state = useSelector(state => state);

  return <MainScreen state={state} />;
};

export default MainScreenContainer;
