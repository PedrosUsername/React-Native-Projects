
 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, textDecorationLine, ScrollView, KeyboardAvoidingView, ImageBackground} from 'react-native';
 import cadastroStyle from '../Style/cadastroStyle';
 import LinearGradient from 'react-native-linear-gradient'

// Coloque o IP do roteador da rede que
// conecta o servidor aos dispositivos
// moveis dos usuarios
var ROTEADOR = '192.168.43.176:3000';
// Celular Pedro ---> '192.168.43.176:3000'
// RoteadorCasa Pedro ---> '192.168.0.2:3000'
// Heroku ---> 'trabalhodelp.herokuapp.com'


//type Props = {};
export default class Cadastro extends Component {//<Props> {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      senha: '',
      fullname: '',
    }
  }

  //verifica se o nome de usuario ja existe no bd
  usuario_ja_registrado(){
  
    fetch('http://' + ROTEADOR + '/verifica/', {
    
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
        usuario: this.state.username,
        
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.length < 1){
        this.props.navigation.navigate('CadastroPerguntas', {
           user: this.state.username,
           password: this.state.senha,
           fullname: this.state.fullname,
         });
      }
      else{
        alert('nome de usuario ja registrado. Por favor escolha outro...');
      }
    })
    .catch((error) => {
      console.error(error);
    });


  }
  
    
  
  handleUsername = (text) => {
    this.setState({ username: text })
  }
  handleSenha = (text) => {
    this.setState({ senha: text })
  }
  handleFullName = (text) => {
    this.setState({ fullname: text })
  }



  render() {
    return (

        <LinearGradient start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}} colors={['#9EFBD3', '#57E9F2', '#45D4FB']} style={cadastroStyle.gradientView}>

          <View style={cadastroStyle.viewPrimaria}>
            <ScrollView>
              
                <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 10, alignSelf: 'flex-start', marginLeft: 0}}>Nome completo: </Text>
                <TextInput
                  placeholder='seu nome'
                  placeholderTextColor= 'white'
                  selectionColor='white'
                  onChangeText = {this.handleFullName}
                  style={{borderColor:'white', borderWidth: 1, width: 300, marginTop: 10, borderRadius:20, color: 'white'}}
                />

                  <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20, alignSelf: 'flex-start', marginLeft: 0}}>Nome de Usuario: </Text>
                  <TextInput
                    placeholder='Usuario'
                    placeholderTextColor= 'white'
                    selectionColor='white'
                    onChangeText = {this.handleUsername}
                    style={{borderColor:'white', borderWidth: 1, width: 300, marginTop: 10, borderRadius:20, color: 'white'}}
                  />



                  <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20, alignSelf: 'flex-start', marginLeft: 0}}>Senha: </Text>
                  <TextInput
                    placeholder='Senha'
                    placeholderTextColor= 'white'
                    selectionColor='white'
                    onChangeText = {this.handleSenha}
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
                    placeholder='nome'
                    placeholderTextColor= 'white'
                    selectionColor='white'
                    style={{borderColor:'white', borderWidth: 1, width: 300, marginTop: 10, borderRadius:20, color: 'white'}}
                  />

                  <TouchableOpacity
                    style={{
                      borderWidth: 1, borderColor: '#FFF', marginTop: 20, height: 45, width: 200, alignSelf: 'center',
                      borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7ef3e0'

                    }}
                    onPress={() => {
                      if((this.state.username != '') && (this.state.senha != '')){

                        this.usuario_ja_registrado();                 

                      }else
                        alert('nome de usuario ou senha inválidos');
                      }}

                  >
                  <Text style={{color:'white', fontSize: 18}}>Enviar</Text>
                  </TouchableOpacity>
            </ScrollView>
          </View>
        </LinearGradient>

    );
  }
}
