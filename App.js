import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {Provider, useSelector} from 'react-redux';
import store from './src/store/store';

console.log('ЗАПУСК App');

const App = () => {
  store.subscribe(() => {
    console.log(store.getState());
  });

  console.log('ЗАПУСК КОМПАНЕНТА App');
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
