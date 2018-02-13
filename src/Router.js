import React from 'react';
import { View, StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import MainMenu from './components/MainMenu';
import ProductMenu from './components/ProductMenu';
import ProductDetail from './components/ProductDetail';
import { Footer } from './components/common';


const RouterComponent = () => {
  StatusBar.setHidden(true);

  return (
    <View style={{ flex: 1 }}>
      <Router sceneStyle={{ paddingTop: 1 }}>
        <Scene key="main">
          <Scene
            key="mainMenu"
            component={MainMenu}
            title="MENU"
            initial
          />
          <Scene
            key="productMenu"
            component={ProductMenu}
            title="ALT MENU"
          />
          <Scene
            key="productDetail"
            component={ProductDetail}
            title=""
          />
        </Scene>
      </Router>
      <Footer /*color={'#993366'}*/ />
    </View>
  );
};


export default RouterComponent;
