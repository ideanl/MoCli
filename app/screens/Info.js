import React, { Component } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../config/colors';
import { List, ListItem } from 'react-native-elements'

const styles = EStyleSheet.create({
  header: {
    flex: 0.14,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  fields: {
    flex: 0.66,
    width: '100%',
    justifyContent: 'center'
  },
  actions: {
    flex: 0.2,
    width: '100%',
    justifyContent: 'center'
  },
});

export default class Info extends Component {
  render() {
    const list = [
      {
        id: 1,
        stat: 'Approved',
        location: 'En Route'
      }
    ];
    return (
      <List>
      {
        list.map((l) => (
          <ListItem
          title={`1: ${l.stat}`}
          titleStyle={{color: '#56C143'}}
          key={l.id}
          />
        ))
          }
      </List>
    );
  }
}
