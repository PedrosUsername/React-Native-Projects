import React from 'react';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  gradientView: {
    flex: 1
  },
  viewPrimaria:{
    height: '100%',
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
      width: '50%',
      borderColor:'white',
      backgroundColor: '#9EFBD3',
      borderWidth:2,
      padding: 10,
      borderRadius: 30,
      color: 'white',
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
  },
  descricaoInput:{
    borderColor: 'white',
    borderWidth: 1,
    width: 300,
    height: 100,
    marginTop: 10,
    borderRadius:10
  }
});

export default styles;
