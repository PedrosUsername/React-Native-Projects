import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, textDecorationLine, ScrollView, KeyboardAvoidingView, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginStyle from '../Style/loginStyle';
export default class TelaLogin extends Component {

  //funcao que liga as pilhas de navegacao AppStack e AuthStack
  _signInAsync = async () => {
    
    this.props.navigation.navigate('App');
    
  };

  render() {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}} colors={['#9EFBD3', '#57E9F2', '#45D4FB']}style={LoginStyle.viewPrincipal}>
      <ScrollView>

                    <View style={LoginStyle.titulo}>
                      <Text style={LoginStyle.textTitulo}>MeetingApp</Text>
                    </View>

                    <View style={LoginStyle.viewSecundaria}>
                            <Image source={require('../img/collaboration-clipart.png')}
                              style={{width: 115, height: 115, borderRadius: 0, borderWidth: 0, borderColor: 'white', marginTop: 5}}
                            />

                            <TextInput
                              placeholder='Usuario'
                              placeholderTextColor= 'white'
                              selectionColor='white'
                              keyboardType={'email-address'}
                              style={{borderColor:'white', borderWidth:2,  padding: 15, borderRadius: 30, width: '80%', color: 'white', marginTop: 10}}
                            />

                            <TextInput
                                placeholder='Senha'
                                placeholderTextColor= 'white'
                                selectionColor='white'
                                style={{borderColor:'white', borderWidth:2, padding: 15, borderRadius: 30, width: '80%', color: 'white', marginTop: 10}}
                              />


                              <TouchableOpacity style={{padding: 7, marginTop: 10, borderRadius:50, width: 170, alignSelf: 'center', borderColor: 'white', borderWidth: 2, backgroundColor: '#7ef3e0'}}
                              onPress={() => this._signInAsync() }
                              >
                                <Text style={{alignSelf:'center', color: 'white', fontStyle: 'italic', fontWeight: 'bold', fontSize: 18}}>Entrar</Text>
                              </TouchableOpacity>
                    </View>

                    <View style={LoginStyle.rodape}>
                        <TouchableOpacity
                          style={{padding: 5, borderRadius: 30,  width: '45%', marginTop: 15, borderColor: 'white', borderWidth: 0}}
                          onPress={() => this.props.navigation.navigate('Cadastro')}
                        ><Text style={{ textAlign: 'center', color: 'white', fontStyle: 'italic', fontWeight: 'bold', fontSize: 16, textDecorationLine: 'underline'}}>Cadastrar</Text></TouchableOpacity>

                        <TouchableOpacity
                          style={{padding: 5, borderRadius: 30, width: '45%', marginTop: 15, borderColor: 'white', borderWidth: 0}}
                          onPress={() => alert("sefodeo parcero...")}
                        ><Text style={{ textAlign: 'center', color: 'white', fontStyle: 'italic', fontWeight: 'bold', fontSize: 16, textDecorationLine: 'underline'}}>Recuperar Senha</Text></TouchableOpacity>
                    </View>

        </ScrollView>
        </LinearGradient>
    );
  }
}
