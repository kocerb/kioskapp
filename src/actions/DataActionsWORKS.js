import firebase from 'firebase';
import { AsyncStorage } from 'react-native';
//import { Actions } from 'react-native-router-flux';
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
        dispatch({ type: DATA_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
/*
export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.employeeList({ type: 'reset' });
      });
  };
};
*/
