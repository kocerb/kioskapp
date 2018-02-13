import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MenuListItem from './MenuListItem';

class MainMenu extends Component {
  componentWillMount() {
    console.log(this.props);
    this.createDataSource(this.props);/*
    Actions.replace(
      'mainMenu',
      { init: true,
        onLeft: {},
        renderLeftButton: {},
        menu: this.props.menu,
        config: this.props.config
      }
    ); */
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    //Actions.refresh(nextProps);
    this.createDataSource(nextProps);
  }

  createDataSource({ menu }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.DataSource = ds.cloneWithRows(menu);
  }

  renderRow(menuItem) {
    return <MenuListItem menuItem={menuItem} /*styleConfig={this.props.config}*/ />;
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

export default MainMenu;
