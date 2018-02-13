import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { dataFetch, initialData } from '../actions';
import MenuListItem from './MenuListItem';

class MainMenu extends Component {
  componentWillMount() {
    this.props.initialData();
    this.createDataSource(this.props);
    console.log('initialProps');
    console.log(this.props);
    this.props.dataFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps');
    console.log(nextProps);
    console.log(nextProps.config.Style.is);
    this.createDataSource(nextProps);
  }

  createDataSource({ menu }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.DataSource = ds.cloneWithRows(menu);
  }

  renderRow(menuItem) {
    return <MenuListItem menuItem={menuItem} styleConfig={this.props.config} />;
  }

  render() {
    return (
        <ListView
          enableEmptySections
          dataSource={this.DataSource}
          renderRow={this.renderRow.bind(this)}
        />
    );
  }
}

const mapStateToProps = state => {
  const menu = _.map(state.data.mainMenu, (val, uid) => {
      return { ...val, uid };
  });
  const config = state.data.config;
  return { menu, config };
};

export default connect(mapStateToProps, { initialData, dataFetch })(MainMenu);
