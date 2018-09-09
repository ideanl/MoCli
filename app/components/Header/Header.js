import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Header = ({ text: text }) => {
  return (
    <Text style={styles.headerText}>{text}</Text>
  );
}

export default Header;
