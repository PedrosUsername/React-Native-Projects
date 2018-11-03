import React from 'react';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  viewPrincipal:{
    flex: 1,
    justifyContent: 'center'
  },
  titulo:{
    //backgroundColor: '#9F47F2',
    //backgroundColor: '#191970',
    borderWidth: 0,
    borderColor: 'green',
    //flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textTitulo:{
    textAlign: 'center',
    fontSize: 55,
    fontStyle: 'italic',
    color: 'white',
    fontFamily: 'Palatino-Italic'
  },
  viewSecundaria:{
    borderWidth: 0,
    borderColor: 'black',
    //flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rodape:{
    borderColor: 'blue',
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',

  },
  imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
}
});

export default styles;
