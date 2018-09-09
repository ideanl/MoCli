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

export default class Request extends Component {
	constructor(props){
    super(props)
    this.state = {date: null};
  }
 
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Header text={"Make Appointment"} /> 
        </View>
        <View style={styles.fields}>
          <FormLabel>Appointment Date</FormLabel>
					<DatePicker
						style={{width: '100%'}}
						date={this.state.date}
						mode="date"
            placeholder="Appointment Date"
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
          <FormLabel>Appointment Time</FormLabel>
          <FormInput placeholder='Appointment Time' />
          <FormLabel>Reason for appointment</FormLabel>
          <FormInput placeholder='Reason' multiline={true} />
        </View>
        <View style={styles.actions}>
          <Button raised title='SUBMIT' backgroundColor={Colors.primary} color={Colors.white} onPress={() => {this.props.navigation.goBack()}} />
          <Button raised title='CANCEL' backgroundColor={Colors.accent} color={Colors.white} onPress={() => {this.props.navigation.goBack()}} />
        </View>
      </View>
    );
  }
}
