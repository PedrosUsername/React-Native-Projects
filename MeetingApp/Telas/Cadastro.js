
 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, textDecorationLine, ScrollView, KeyboardAvoidingView, ImageBackground} from 'react-native';
 import cadastroStyle from '../Style/cadastroStyle';
 import LinearGradient from 'react-native-linear-gradient'

type Props = {};
export default class Cadastro extends Component<Props> {
  render() {
    return (

        <LinearGradient start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}} colors={['#9EFBD3', '#57E9F2', '#45D4FB']} style={cadastroStyle.gradientView}>

          <View style={cadastroStyle.viewPrimaria}>
      <ScrollView>
          <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 10, alignSelf: 'flex-start', marginLeft: 0}}>Nome completo: </Text>
          <TextInput
            placeholder='Usuario'
            placeholderTextColor= 'white'
            selectionColor='white'
            style={{borderColor:'white', borderWidth: 1, width: 300, marginTop: 10, borderRadius:20, color: 'white'}}
          />

            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20, alignSelf: 'flex-start', marginLeft: 0}}>Nome de Usuario: </Text>
            <TextInput
              placeholder='Usuario'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={{borderColor:'white', borderWidth: 1, width: 300, marginTop: 10, borderRadius:20, color: 'white'}}
            />



            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20, alignSelf: 'flex-start', marginLeft: 0}}>Senha: </Text>
            <TextInput
              placeholder='Senha'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={{borderColor:'white', borderWidth: 1, width: 300, marginTop: 10, borderRadius:20, color: 'white'}}
            />



            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20, alignSelf: 'flex-start', marginLeft: 0}}>Confirme sua Senha: </Text>
            <TextInput
              placeholder='Confirmação Senha'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={{borderColor:'white', borderWidth: 1, width: 300, marginTop: 10, borderRadius:20, color: 'white'}}
            />

            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20, alignSelf: 'flex-start', marginLeft: 0}}>E-mail: </Text>
            <TextInput
              placeholder='E-mail'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={{borderColor:'white', borderWidth: 1, width: 300, marginTop: 10, borderRadius:20, color: 'white'}}
            />

            <TouchableOpacity
              style={{
                borderWidth: 1, borderColor: '#FFF', marginTop: 20, height: 45, width: 200, alignSelf: 'center',
                borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7ef3e0'

              }}
              onPress={() => this.props.navigation.navigate('CadastroPerguntas')}
            >
            <Text style={{color:'white', fontSize: 18}}>Enviar</Text>
            </TouchableOpacity>
      </ScrollView>
          </View>
        </LinearGradient>

    );
  }
}
