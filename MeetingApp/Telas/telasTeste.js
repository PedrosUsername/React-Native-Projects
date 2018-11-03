import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, Picker, textDecorationLine, ScrollView, KeyboardAvoidingView, ImageBackground, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
 import SelectInput from 'react-native-select-input-ios';

class MyComponent extends Component {


  opcoesLocalizacao() {
    return [
      { value: 'UNB', label: 'Universidade de Brasilia'},
      { value: 'BRASILIA', label: 'Brasilia - DF'},
      { value: 'SALA_LP', label: 'Sala LP - Ladeira'}
    ];
  }

  render() {
    return (
      <View style={{}}>
      <Picker
      enabled={true}
      style={{color:'white', backgroundColor: 'green', alignSelf: 'center', width: 200, height: 50, opacity: 1, borderRadius: 0, borderColor: 'blue' }}
      itemStyle={{ fontFamily: 'normal', borderRadius: 90, alignSelf: 'center'}}
      placeholder="Selecione o País"
      mode="dropdown"

             >

             <Picker.Item label="C++"  value="java" />
             <Picker.Item label="JavaScript" value="js"/>
         </Picker>
         <TouchableOpacity style={{width: 100, height: 100, alignSelf: 'flex-end', backgroundColor: 'red'}}

         >
         <Text>BOTAO TESTE</Text>
         </TouchableOpacity>
  
      </View>
    );
  }
}


const styles = StyleSheet.create({
  itemStyle: {
      width: 90,
      height: 75,
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'blue'
    },
    pickerIosListItemText: {
      fontSize: 90,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white'
    }
});
export default MyComponent;
