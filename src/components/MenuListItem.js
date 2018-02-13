import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, NavHeaderTitle } from './common';

class MenuListItem extends Component {
  onRowPress() {
    Actions.productMenu({
      products: this.props.menuItem.products,
      title: this.props.menuItem.name,
      renderTitle: () => <NavHeaderTitle iconSource={'https://i.hizliresim.com/7NZogP.png'} title={this.props.menuItem.name} />
     });
  }

  viewStyle() {
    return { paddingTop: this.props.styleConfig.Style.is };
  }


  render() {
    const { name } = this.props.menuItem;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View /*style={this.viewStyle()}*/>
          <CardSection>
            <Image style={styles.imageStyle} source={{ uri: 'https://i.hizliresim.com/7NZogP.png' }} />
            <View style={{ justifyContent: 'center', flex: 3, height: 80 }} >
              <Text style={styles.titleStyle}>
                {name}
              </Text>
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }


}

const styles = {
  titleStyle: {
    fontSize: 24,
    paddingLeft: 15,
//    alignSelf: 'center',
  },
  imageStyle: {
    //flex: 1,
    borderRadius: 40,
    width: 80
  }
};


export default MenuListItem;
