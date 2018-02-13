// Import libraries for making a component
import React from 'react';
import { View, Image } from 'react-native';


// Make a component
const Footer = (props) => {
  const { imageStyle, viewStyle } = styles;
  console.log(props.imageSource);
  console.log(props.color);

  function backgroundColorFunc() {
    return props.color || '#F8F8F8';
  }

  const backgroundColor = backgroundColorFunc();

  return (
    <View style={{ ...viewStyle, backgroundColor }} >
      <Image style={imageStyle} source={{ uri: props.imageSource }} />
    </View>
  );
};

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

// Make the component available to other parts of the app
export { Footer };
