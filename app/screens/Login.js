import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header } from '../components/Header';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Colors from '../config/colors';
import {Button} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

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

export default class Login extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Header text={"Login"} /> 
        </View>
        <View style={styles.fields}>
          <FormLabel>Email</FormLabel>
          <FormInput placeholder='Email' />
          <FormLabel>Password</FormLabel>
          <FormInput placeholder='Password' secureTextEntry={true} />
        </View>
        <View style={styles.actions}>
          <Button raised title='SUBMIT' backgroundColor={Colors.primary} color={Colors.white} onPress={() => {this.props.navigation.navigate('SignedIn')}} />
          <Button raised title='CANCEL' backgroundColor={Colors.accent} color={Colors.white} onPress={() => {this.props.navigation.goBack()}} />
        </View>
      </View>
    );
  }
}
