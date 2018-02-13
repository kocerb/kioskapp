/*import React, { Component } from 'react';
import { Text } from 'react-native';

class ProductMenu extends Component {
  render() {
      return (
          <Text>ProductMenu</Text>
      );
  }
}

export default ProductMenu;
*/

import React, { Component } from 'react';
import { ListView } from 'react-native';
import ProductListItem from './ProductListItem';

class ProductMenu extends Component {
  componentWillMount() {
    const products = this.props.products;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    console.log(this.props);
    this.DataSource = ds.cloneWithRows(products);
  }
/*
  renderRow(product) {
    return <ProductListItem product={product}/>;
  }
*/
  render() {
    return (
        <ListView
          enableEmptySections
          dataSource={this.DataSource}
          renderRow={(product) => <ProductListItem product={product} />}
        />
    );
  }
}

export default ProductMenu;
