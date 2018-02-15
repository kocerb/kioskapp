import firebase from 'firebase';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { DATA_FETCH_SUCCESS, DATA_FETCH_RUNNING } from './types';

export const initialData = () => {
  return (dispatch) => {
    AsyncStorage.getItem('localData').then(
    value => {
      //if (value !== null) {
        const localData = JSON.parse(value);
        console.log(localData);
        dispatch({ type: DATA_FETCH_RUNNING, payload: localData });
      //}
    });
    //const noLocalData = {};
    //return noLocalData;
  };
};

export const dataFetch = () => {
  const { currentUser } = firebase.auth();
  console.log(currentUser);

  return (dispatch) => {
    firebase.database().ref('/')
      .on('value', snapshot => {
        AsyncStorage.setItem('localData', JSON.stringify(snapshot.val()));
        dispatch({ type: DATA_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
