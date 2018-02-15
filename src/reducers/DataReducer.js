//import { AsyncStorage } from 'react-native';
import {
  DATA_FETCH_SUCCESS, DATA_FETCH_RUNNING
} from '../actions/types';


const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      console.log(action.payload);
//    AsyncStorage.setItem('localData', JSON.stringify(action.payload));
      return action.payload;

    case DATA_FETCH_RUNNING:
      return action.payload;

    default:
        return state;

  }
};
