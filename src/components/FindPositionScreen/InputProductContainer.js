import React from 'react';
import InputProduct from './InputProduct';
import getExpectProducts from '../../logics/getExpectProducts';
import {useSelector} from 'react-redux';

console.log('ЗАПУСК InputProductContainer', getExpectProducts);

const InputProductContainer = ({title, routScreen}) => {
  console.log('ЗАПУСК КАМПОНЕНТА InputProductContainer');
  let colorBlack = useSelector(state => state.them.colorBlack);

  return (
    <InputProduct
      getExpectProducts={getExpectProducts}
      colorBlack={colorBlack}
    />
  );
};

export default InputProductContainer;
