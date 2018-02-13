import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { View } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import MainMenu from './components/MainMenu';
import ProductMenu from './components/ProductMenu';
import ProductDetail from './components/ProductDetail';
import DatabaseFetcher from './DatabaseFetcher';
import { Footer } from './components/common';


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
        <View style={{ flex: 1 }}>
          <DatabaseFetcher />
          <Router sceneStyle={{ paddingTop: 1 }}>
              <Scene key="main">
                <Scene
                  initial
                  key="mainMenu"
                  component={MainMenu}
                  title="MENU"
                  menu={{}}
                  config={{}}
//                navBar={() => <View style={{ height: 50, backgroundColor: '#993366' }} />}
                />
                <Scene
                  key="productMenu"
                  component={ProductMenu}
                  title="ALT MENU"
                  product={{}}
                />
                <Scene
                  key="productDetail"
                  component={ProductDetail}
                  title="AÇIKLAMA"
                />
              </Scene>
          </Router>
          <Footer />
        </View>
      </Provider>
    );
  }
}

export default App;
