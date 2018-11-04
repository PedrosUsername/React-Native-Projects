import React from 'react';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  gradientView: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  viewTitulo: {
    width: 300,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewTituloTexto: {
    fontSize: 60,
    color: 'white',
    fontFamily: 'Optima-BoldItalic'
  },
  viewSecundaria: {
    marginTop:10,
    width: 300,
    height: 430,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewContainerCentral: {
    backgroundColor: 'white',
    width: 270,
    height: 410,
    borderRadius: 20,
  },
  btnContainerCentral: {
    borderWidth: 0,
    width: 230,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7ef3e0',
    alignSelf: 'center',
    marginTop: 10
  },
  textBtnContainerCentral: {
    color: '#fff',
    fontSize: 22,
    fontStyle: 'italic'
  },
  viewContainerCentralAvatar: {
    width: 100,
    height: 100,
    borderWidth:4,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 10,
    borderColor: '#7ef3e0'
  },
  btnSetting: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'

  },
  txtSettings: {
    alignSelf: 'center',
    fontSize: 23,
    color: '#7ef3e0',

  }

});

export default styles;
