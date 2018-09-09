/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/router'

EStyleSheet.build();

export default class App extends Component<Props> {
  render() {
    return (
      <Navigator onNavigationStateChange={null} />
    );
  }
}
