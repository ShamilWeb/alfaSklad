import {PRODUCTS} from '../types';
const initialState = {
  products: null,
  productsNames: null,
};

export default (fairebase = (state = initialState, action) => {
  switch (PRODUCTS) {
    case action.type:
      return {...state, products: action.payLoad};
  }
  return state;
});
