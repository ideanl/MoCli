import React, { Component } from 'react';
import { StyleSheet, Alert, Text, View, Image } from 'react-native';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import Colors from '../../config/colors'

import { Header } from '../../components/Header'

import styles from './styles';

class IntroLanding extends Component {
  constructor(props) {
    super(props);

    this.state = {1: 0, 2: 0};
  }

  render() {
    return (
      <Swiper loop={false} onIndexChanged={(index) => this.setState({[index]: 1})}>
        <Animatable.View style={{flex: 1}} animation="bounceInDown">
          <View style={styles.header}>
            <Header text="MoCli" />
          </View>
          <View style={styles.tips}>
            <View style={styles.slide}>
              <Image style={{aspectRatio: 1, height: 200 }} resizeMode='contain' source={require('../../assets/MocliLogo.png')} />
              <Text style={{color: Colors.accent, marginTop: 15, fontSize: 18, fontWeight: '300'}}>Swipe to learn more</Text>
            </View>
          </View>
        </Animatable.View>

        <Animatable.View style={{flex: 1, opacity: this.state[1]}} transition="opacity" duration={300}>
          <View style={styles.header}>
            <Header text="Find Your Mobile Clinic" />
          </View>
          <View style={styles.tips}>
            <View style={styles.slide}>
              <Image style={{aspectRatio: 1, height: 200 }} resizeMode='contain' source={require('../../assets/BusLogo.png')} />
              <Text style={{color: Colors.accent, marginTop: 15, fontSize: 18, fontWeight: '300'}}>Quick, Easy, Accessible Care</Text>
            </View>
          </View>
        </Animatable.View>

        <Animatable.View style={{flex: 1, opacity: this.state[2]}} transition="opacity" duration={300}>
          <View style={styles.header}>
            <Header text="Make An Appointment" />
          </View>
          <View style={styles.tips}>
            <View style={styles.slide}>
              <Image style={{aspectRatio: 1, height: 200 }} resizeMode='contain' source={require('../../assets/AptLogo.png')} />
              <Text style={{color: Colors.accent, marginTop: 15, fontSize: 18, fontWeight: '300'}}>Meet a doctor in a few taps</Text>
            </View>
          </View>
        </Animatable.View>
      </Swiper>
    );
  }
}

export default IntroLanding;
