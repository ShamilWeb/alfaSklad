import {PRODUCTS} from '../types';

const setProducts = value => {
  return {
    type: PRODUCTS,
    payLoad: value,
  };
};
export default setProducts;
