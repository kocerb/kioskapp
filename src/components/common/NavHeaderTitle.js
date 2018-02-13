// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a component
const NavHeaderTitle = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image style={styles.imageStyle} source={{ uri: props.iconSource }} />
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    paddingLeft: 5,
    fontSize: 18,
    fontWeight: '500'
  },
  imageStyle: {
    width: 40,
    height: 40
  }
};

// Make the component available to other parts of the app
export { NavHeaderTitle };
