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

export default class Register extends Component {
	constructor(props){
    super(props)
    this.state = {date: null};
  }
 
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Header text={"Sign Up"} /> 
        </View>
        <View style={styles.fields}>
          <FormLabel>Name</FormLabel>
          <FormInput placeholder='Please enter your name...' />
          <FormLabel>Phone</FormLabel>
          <FormInput placeholder='Please enter your phone...' />
          <FormLabel>Email</FormLabel>
          <FormInput placeholder='Please enter your email...' />
          <FormLabel>Date of Birth</FormLabel>
					<DatePicker
						style={{width: '100%'}}
						date={this.state.date}
						mode="date"
            placeholder="Please enter your birthday..."
						format="YYYY-MM-DD"
						minDate="1900-01-01"
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						showIcon={false}
						onDateChange={(date) => {this.setState({date: date})}}
						customStyles={{
							dateInput: {
                alignItems: 'flex-start',
                fontSize: 20,
								marginLeft: 20,
								marginRight: 20,
                borderLeftWidth: 0,
                borderBottomWidth: 1,
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderColor: "#c2c2c2",
                color: "#c2c2c2"
							}
						}}

		      />
          <FormLabel>Address</FormLabel>
          <FormInput placeholder='Please enter your address...' />
          <FormLabel>Sex</FormLabel>
          <FormInput placeholder='Please enter your sex...' />
        </View>
        <View style={styles.actions}>
          <Button raised title='SUBMIT' backgroundColor={Colors.primary} color={Colors.white} onPress={() => {this.props.navigation.navigate('SignedIn')}} />
          <Button raised title='CANCEL' backgroundColor={Colors.accent} color={Colors.white} onPress={() => {this.props.navigation.goBack()}} />
        </View>
      </View>
    );
  }
}
