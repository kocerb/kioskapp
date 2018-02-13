// Import libraries for making a component
import React, { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native';


// Make a component
class Footer extends Component {

  state = { color: '#F8F8F8' };

  getColor() {
    AsyncStorage.getItem('localData').then(
    value => {
      //if (value !== null) {
        const localData = JSON.parse(value);
        this.setState({ color: localData.config.Style.footerColor });
      });
  }


  backgroundColorFunc() {
    this.getColor();
    return this.state.color;
  }

  render() {
    const backgroundColor = this.backgroundColorFunc();
    const { imageStyle, viewStyle } = styles;

    return (
      <View style={{ ...viewStyle, backgroundColor }} >
        <Image style={imageStyle} source={{ uri: this.props.imageSource }} />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    //flex: 1,
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    bottom: 0
  },
  imageStyle: {
    flex: 1,
    height: 70
  }
};


export default styles;
