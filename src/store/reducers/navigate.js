import {NAVIGATE} from '../types';
const initialState = {
  ss: 224,
  navigate: null,
};

export default (navigateReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE:
      return {...state, navigate: action.payLoad};
  }
  return state;
});
