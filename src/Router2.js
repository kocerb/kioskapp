import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import MainMenu from './components/MainMenu';
import ProductMenu from './components/ProductMenu';
import ProductDetail from './components/ProductDetail';
import { Footer } from './components/common';


const RouterComponent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Router sceneStyle={{ paddingTop: 1 }}>
        <Scene key="main">
          <Scene
            onRight={() => Actions.productMenu()}
            rightTitle="->"
            key="mainMenu"
            component={MainMenu}
            title="MENU"
            menu={props.data.menu}
            config={props.data.config}
            initial
          />
          <Scene
            onRight={() => Actions.productDetail()}
            rightTitle="->"
            key="productMenu"
            component={ProductMenu}
            title="ALT MENU"
          />
          <Scene
            key="productDetail"
            component={ProductDetail}
            title="AÇIKLAMA"
          />
        </Scene>
      </Router>
      <Footer color={'#993366'} />
    </View>
  );
};

export default RouterComponent;
