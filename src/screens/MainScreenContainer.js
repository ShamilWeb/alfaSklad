import React, {useEffect} from 'react';
// import {useffect} from 'react-native';
import MainScreen from './MainScreen';
import {useSelector, useDispatch} from 'react-redux';
import navigationAction from '../store/action/navigate';

console.log('ЗАПУСК MainScreenContainer');

const MainScreenContainer = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(navigationAction(navigation.navigate));
  }, [dispatch]);
  let state = useSelector(state => state);
  console.log('ЗАПУСК КАМПОНЕНТА MainScreenContainer');

  return <MainScreen state={state} />;
};

export default MainScreenContainer;
