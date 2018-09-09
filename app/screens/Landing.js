import React, { Component } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import EStyleSheet from 'react-native-extended-stylesheet';
import { IntroLanding } from '../components/IntroLanding';
import Colors from '../config/colors';
import {Button} from 'react-native-elements';

const styles = EStyleSheet.create({
  actions: {
    justifyContent: 'center',
    flex: 0.2,
    width: '100%',
  },
	wrapper: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white'
  },
});

export default class Landing extends Component {
  render() {
    return (
      <Animatable.View style={styles.wrapper} animation="fadeIn" duration={2000}>
        <IntroLanding />
        <View style={styles.actions}>
          <Button raised title='LOGIN' backgroundColor={Colors.primary} color={Colors.white} onPress={() => {this.props.navigation.navigate('Login')}} />
          <Button raised title='SIGN UP' backgroundColor={Colors.accent} color={Colors.white} onPress={() => {this.props.navigation.navigate('Register')}} />
        </View>
      </Animatable.View>
    );
  }
}
