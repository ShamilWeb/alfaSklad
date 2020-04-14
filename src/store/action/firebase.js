import {PRODUCTS, PRODUCTS_NAME} from '../types';

export const setProducts = value => {
  return {
    type: PRODUCTS,
    payLoad: value,
  };
};
export const setProductsName = value => {
  return {
    type: PRODUCTS_NAME,
    payLoad: value,
  };
};
// export default setProducts;
// export default setProductsName;
