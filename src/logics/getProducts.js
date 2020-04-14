import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
import {setProducts} from '../store/action/firebase';

const getProducts = async dispatch => {
  console.log(
    'ВЫПОЛНИЛАСЬ ФУНКЦИЯ getProducts-ЗАБИРАЕТ ДАННЫЕ ИЗ СТОРЕДЖА, ЕСЛИ ТАМ ИХ НЕТ ВЫЗЫВАЕТ ФУНКЦИЮ getDataFirebase, КОТОРАЯ ЗАБИРАЕТ ДАННЫЕ С СЕРВЕРА',
  );

  let products = [];

  ////////////////////////////////////////////////////
  const storeData = async (productsJson, products) => {
    console.log('ВЫПОЛНИЛАСЬ ФУНКЦИЯ storeData-СОХРОНЯЕТ ДАННЫЕ В Сторедж');

    await AsyncStorage.setItem('products', productsJson);

    await dispatch(setProducts(products));
  };
  ///////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////
  const getDataFirebase = async () => {
    console.log(
      'ВЫПОЛНИЛАСЬ ФУНКЦИЯ getDataFirebase-ЗАБИРАЕТ ДАННЫЕ С СЕРВЕРА И ПЕРЕДАЕТ В storeData',
    );

    await firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          products.push(documentSnapshot.data());
        });
      });

    const productsJson = JSON.stringify(products);
    await storeData(productsJson, products);
  };
  ////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////
  const getData = async () => {
    const value = await AsyncStorage.getItem('products');
    if (value) {
      const products = JSON.parse(value);
      dispatch(setProducts(products));
    } else {
      throw 'нет данных в AsyncStorage';
    }
  };
  /////////////////////////////////////////////////////

  await getData().catch(getDataFirebase);
};
export default getProducts;
