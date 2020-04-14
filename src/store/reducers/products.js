import {PRODUCTS, PRODUCTS_NAME, EXPECT_PRODUCTS} from '../types';
const initialState = {
  products: null,
  productsName: null,
  expectProducts: null,
};

export default (fairebase = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS:
      return {...state, products: action.payLoad};
    case PRODUCTS_NAME:
      return {...state, productsName: action.payLoad};
    case EXPECT_PRODUCTS:
      return {...state, expectProducts: action.payLoad};
  }
  return state;
});
