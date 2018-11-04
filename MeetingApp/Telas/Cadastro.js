
 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, textDecorationLine, ScrollView, KeyboardAvoidingView, ImageBackground} from 'react-native';
 import cadastroStyle from '../Style/cadastroStyle';
 import LinearGradient from 'react-native-linear-gradient'

//type Props = {};
export default class Cadastro extends Component {//<Props> {
  render() {
    return (
      <ScrollView>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}} colors={['#9EFBD3', '#57E9F2', '#45D4FB']} style={cadastroStyle.gradientView}>

          <View style={cadastroStyle.viewPrimaria}>

            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 80}}>Nome de Usuario: </Text>
            <TextInput
              placeholder='Usuario'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={cadastroStyle.buttons}
            />



            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20}}>Senha: </Text>
            <TextInput
              placeholder='Senha'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={cadastroStyle.buttons}
            />



            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20}}>Confirme sua Senha: </Text>
            <TextInput
              placeholder='Confirmação Senha'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={cadastroStyle.buttons}
            />

            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20}}>E-mail: </Text>
            <TextInput
              placeholder='E-mail'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={cadastroStyle.buttons}
            />

            <TouchableOpacity
              style={{
                borderWidth: 1, borderColor: '#FFF', marginTop: 20, height: 45, width: 240,
                borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7ef3e0'

              }}
              onPress={() => this.props.navigation.navigate('CadastroPerguntas')}
            >
            <Text style={{color:'white', fontSize: 18}}>Enviar</Text>
            </TouchableOpacity>

          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
}
