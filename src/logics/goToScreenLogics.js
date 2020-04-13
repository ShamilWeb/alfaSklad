import {useSelector} from 'react-redux';

export default {
  goToFindPositionScreen: () => {
    const navigate = useSelector(state => state.navigation.navigate);
    navigate('FindPosition');
  },
};
