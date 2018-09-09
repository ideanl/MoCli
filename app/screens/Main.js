import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image
} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Colors from '../config/colors';
import {Button} from 'react-native-elements';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const GOOGLE_MAPS_APIKEY = 'AIzaSyBcWb0dLFzqpnf0xDULXLydtm-v3KuXDzI';

export default class Main extends Component {
  constructor(props) {
      super(props)

      this.state = {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
				coordinates: [
          {latitude: 41.4303, longitude: -97.3594},
          {latitude: 41.8417, longitude: -96.7086},
          {latitude: 42.4649, longitude: -96.4131},
          {latitude: 42.0327, longitude: -97.4138},
          {latitude: 41.4303, longitude: -97.3594},
				]
      };

    this.mapView = null;
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
         });
       },
       (error) => console.log("Error: " + error.message),
       { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
     );
  }

  render() {
      return (
        <View style={styles.map}>
          <MapView
            style={styles.map}
            initialRegion={this.state}
            ref={c => this.mapView = c}>

           {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
             flat={true}
             pinColor={Colors.primary}
             opacity={0.5}
             coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
             title={"Your Location"}
           />}

          {this.state.coordinates.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
          )}
          {(this.state.coordinates.length >= 2) && (
            <MapViewDirections
              origin={this.state.coordinates[0]}
              waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
              destination={this.state.coordinates[this.state.coordinates.length-1]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="hotpink"
              onStart={(params) => {
                console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
              }}
              onReady={(result) => {
                console.log(this.state.coordinates.slice(0, -1));
                let coordsToFit = this.state.coordinates;
                this.mapView.fitToCoordinates(coordsToFit, {
                  edgePadding: {
                    right: (width / 20) + 15,
                    bottom: (height / 20) + 15,
                    left: (width / 20) + 15,
                    top: (height / 20) + 15,
                  }
                });
              }}
              onError={(errorMessage) => {
                console.log('Error: ' + errorMessage);
              }}
            />
          )}

         </MapView>
         <Image style={{aspectRatio: 1, height: 50, position: 'absolute', left: -180, top: 20}} resizeMode='contain' source={require('../assets/MocliLogo.png')} />
         <View style={styles.actions}>
           <Button containerViewStyle={{width: '108%' , padding: 0, margin: 0, marginLeft: -15}} title='MAKE APPOINTMENT' backgroundColor={Colors.primary} color={Colors.white} onPress={() => {this.props.navigation.navigate('Request')}} />
           <Button containerViewStyle={{width: '108%' , padding: 0, margin: 0, marginLeft: -15}} title='VIEW APPOINTMENTS' backgroundColor={Colors.accent} color={Colors.white} onPress={() => {this.props.navigation.navigate('Info')}} />
         </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  actions: {
    width: '100%',
    margin: 0,
    padding: 0,
  }
});
