import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ProductListItem extends Component {
  onRowPress() {
    Actions.productDetail({
      product: this.props.product,
      title: ''
      });
  }

  render() {
    const { name, price, icon } = this.props.product;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Image style={styles.imageStyle} source={{ uri: icon }} />
            <View style={{ justifyContent: 'space-between', flex: 4, height: 65 }} >
              <Text style={styles.nameStyle}>
                {name}
              </Text>
              <Text style={styles.priceStyle}>
                {price}
              </Text>
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  nameStyle: {
    fontSize: 18,
    paddingLeft: 10
  },
  priceStyle: {
    fontSize: 15,
    paddingBottom: 5,
    paddingRight: 10,
    alignSelf: 'flex-end'
  },
  imageStyle: {
    //flex: 1,
    //borderRadius: 25,
    width: 80
  }
};

export default ProductListItem;
