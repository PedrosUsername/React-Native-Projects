import React from 'react';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  gradientView: {
    flex: 1
  },
  viewPrimaria:{
    height: 600,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  footer:{
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttons:{
      width: 90,
      borderColor:'white',
      borderWidth:2,
      padding: 10,
      borderRadius: 30,
      width: '80%',
      color: 'white',
      marginTop: 10
  }
});

export default styles;
