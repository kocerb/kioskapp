import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { CardSection, Card } from './common';


class ProductDetail extends Component {
  render() {
    const { name, shortDesc, longDesc, price, id, icon } = this.props.product;

      return (
        <View>
          <Card>
            <CardSection>
              <Image style={styles.imageStyle} source={{ uri: icon }} />
              <View style={styles.titleContainerStyle} >
                <View>
                  <Text style={styles.titleStyle}>
                    {name}
                  </Text>
                  <Text style={styles.shortDescStyle}>
                    {shortDesc}
                  </Text>
                </View>
                <CardSection style={{ justifyContent: 'space-between', borderBottomWidth: 0 }}>
                  <Text style={styles.idStyle}>
                    Ürün kodu: {id}
                  </Text>
                  <View style={styles.priceContainerStyle}>
                    <Text style={styles.priceStyle}>
                      {price} TL
                    </Text>
                  </View>
                </CardSection>
              </View>
            </CardSection>
            <CardSection>
              <Text style={styles.longDescStyle}>
                  {longDesc}
              </Text>
            </CardSection>
          </Card>
        </View>
      );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5,
    fontWeight: '600'
//    alignSelf: 'center',
  },
  shortDescStyle: {
    fontSize: 12,
    paddingLeft: 5,
    paddingTop: 10,
  },
  longDescStyle: {
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10
  },
  idStyle: {
    fontSize: 8,
    alignSelf: 'flex-end'
  },
  priceStyle: {
    fontSize: 16,
    color: '#fff',
    margin: 4,
    fontWeight: '600'
  },
  priceContainerStyle: {
    backgroundColor: '#00605A'
  },
  imageStyle: {
    width: 160,
    height: 160
  },
  titleContainerStyle: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
};

export default ProductDetail;
