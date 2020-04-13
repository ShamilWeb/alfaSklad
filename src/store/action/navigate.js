import {NAVIGATE} from '../types';

const navigate = value => {
  return {
    type: NAVIGATE,
    payLoad: value,
  };
};
export default navigate;
