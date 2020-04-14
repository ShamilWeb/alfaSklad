import {PRODUCTS, PRODUCTS_NAME} from '../types';
const initialState = {
  products: null,
  productsName: null,
};

export default (fairebase = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS:
      return {...state, products: action.payLoad};
    case PRODUCTS_NAME:
      return {...state, productsName: action.payLoad};
  }
  return state;
});
