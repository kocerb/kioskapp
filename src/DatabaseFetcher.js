import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { dataFetch, initialData } from './actions';
//import Router from './Router';
//import { Spinner } from './components/common';

class DatabaseFetcher extends Component {

  componentWillMount() {
    this.props.initialData();
    console.log(this.props);
    this.props.dataFetch();
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    switch (nextProps.config) {
      case null || undefined : {
        console.log(nextProps);
        break;
      }
      default:
        console.log(nextProps.config.Style.headerColor);
        Actions.reset('mainMenu',
          {
            init: true,
            menu: nextProps.menu,
            config: nextProps.config
         }
       );
        break;
    }
  }

  render() {
    return (
      <View />
    );
  }

}


const Styles = {
  navBarStyle: {
    backgroundColor: 'fff'
  }
};

const mapStateToProps = state => {
  console.log(state);
  const menu = _.map(state.data.mainMenu, (val, uid) => {
      return { ...val, uid };
  });
  const config = state.data.config;
  return { menu, config };
};

export default connect(mapStateToProps, { initialData, dataFetch })(DatabaseFetcher);
