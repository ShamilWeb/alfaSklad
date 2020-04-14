import {setExpectProducts} from '../store/action/products';
import store from '../store/store';

const getExpectProducts = userInput => {
  expectProducts = [];
  const products = store.getState().firebase.products;

  if (userInput) {
    for (let i = 0; i < products.length; i++) {
      if (RegExp(`^${userInput}`, 'i').test(products[i].name)) {
        expectProducts.push(products[i]);
        if (expectProducts.lenght > 8) {
          break;
        }
      }
    }
  }

  store.dispatch(setExpectProducts(expectProducts));
};

export default getExpectProducts;
