import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
import setProducts from '../store/action/firebase';

const storeData = async value => {
  await AsyncStorage.setItem('products', value);
};

const getDataFirebase = async () => {
  let products = [];
  await firestore()
    .collection('users')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        products.push(documentSnapshot.data());
      });
    });

  const productsJson = JSON.stringify(products);
  storeData(productsJson);
};

const getProducts = dispatch => {
  const getData = async () => {
    const value = await AsyncStorage.getItem('products');
    if (value) {
      const products = JSON.parse(value);
      dispatch(setProducts(products));
    } else {
      throw 'нет данных в AsyncStorage';
    }
  };
  getData().catch(getDataFirebase);
};
export default getProducts;
