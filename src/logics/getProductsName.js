import {setProductsName} from '../store/action/products';
import store from '../store/store';

const getProductsName = dispatch => {
  const products = store.getState().firebase.products;
  if (products) {
    const productsName = products.map(product => product.name);
    dispatch(setProductsName(productsName));
  }
};

export default getProductsName;
