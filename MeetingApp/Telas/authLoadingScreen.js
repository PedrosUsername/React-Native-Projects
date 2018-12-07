import React from 'react';
import { StatusBar, ActivityIndicator, View, StyleSheet } from 'react-native';

export default class AuthLoadingScreen extends React.Component{
    constructor (props) {
      super(props);
      this._boostrapAsync();
    }
  
    _boostrapAsync = async () => {

      this.props.navigation.navigate('Auth');
    }
  
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator/>
          <StatusBar barStyle="default" />
        </View>
      )
    }
  }
  
const styles = StyleSheet.create({

  container: {
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
  },

});
  