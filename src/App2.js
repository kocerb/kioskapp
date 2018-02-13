import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDHhhUAqx6dF3RbqIzRghXloWt3jZTIw_Y',
      authDomain: 'kioskapp-cdd5d.firebaseapp.com',
      databaseURL: 'https://kioskapp-cdd5d.firebaseio.com',
      projectId: 'kioskapp-cdd5d',
      storageBucket: 'kioskapp-cdd5d.appspot.com',
      messagingSenderId: '33269745010'
    };

    firebase.initializeApp(config);

    firebase.auth().signInWithEmailAndPassword('demouser@kiosk.com', 'demo123')
    .then(user => console.log(user))
    .catch(error => console.log((error)));
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
