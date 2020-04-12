import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './src/store/store';

console.log('ЗАПУСК App');

const App = () => {
  console.log('ЗАПУСК КОМПАНЕНТА App');
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
