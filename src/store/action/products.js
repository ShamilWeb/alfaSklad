import {PRODUCTS, PRODUCTS_NAME, EXPECT_PRODUCTS} from '../types';

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
export const setExpectProducts = value => {
  return {
    type: EXPECT_PRODUCTS,
    payLoad: value,
  };
};
// export default setProducts;
// export default setProductsName;
