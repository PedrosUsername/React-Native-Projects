import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, textDecorationLine, ScrollView, KeyboardAvoidingView, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import cadastroStyle from '../Style/cadastroStyle';

// Coloque o IP do roteador da rede que
// conecta o servidor aos dispositivos
// moveis dos usuarios
var ROTEADOR = '192.168.43.176:3000';
// Celular Pedro ---> '192.168.43.176:3000'
// RoteadorCasa Pedro ---> '192.168.0.2:3000'
// Heroku ---> 'trabalhodelp.herokuapp.com'


//type Props = {};
export default class CadastroPerguntas extends Component {//<Props> {
  constructor(props) {
    super(props);

    // recebe parametros de Cadastro.js
    const { navigation } = this.props;
    const user = navigation.getParam('user', 'x');
    const password = navigation.getParam('password', 'x');
    const fullname = navigation.getParam('fullname', 'x');

    this.state = {
      usuario: user,
      senha: password,
      full_nome: fullname,
      curso: '',
      signo: '',
      uma_refeicao: '',
      uma_banda: ''
    }
  }



  //pede para o bd registrar o usuario com tais valores
  postStufftoRegister() {
    
    fetch('http://' + ROTEADOR + '/novousuario/', {
   
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
        usuario: this.state.usuario,
        senha: this.state.senha,
        full_nome: this.state.full_nome,
        curso: this.state.curso,
        signo: this.state.signo,
        uma_banda: this.state.uma_banda,
        uma_refeicao: this.state.uma_refeicao
        
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);

      this.props.navigation.navigate('Login');
    })
    .catch((error) => {
    console.error(error);
    });

  }

  handleCurso = (text) => {
    this.setState({ curso: text })
  }
  handleSigno = (text) => {
    this.setState({ signo: text })
  }
  handleUmaRefeicao = (text) => {
    this.setState({ uma_refeicao: text })
  }
  handleUmaBanda = (text) => {
    this.setState({ uma_banda: text })
  }

  render (){
    
    
    return (
      <ScrollView>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}} colors={['#9EFBD3', '#57E9F2', '#45D4FB']} style={cadastroStyle.gradientView}>

          <View style={cadastroStyle.viewPrimaria}>

            <Text
            style={{color:'white', fontSize: 50, fontFamily: 'Palatino-Italic', fontStyle: 'italic',}}
            >
            jogo rapido
            </Text>

            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 30}}>seu curso:</Text>
            <TextInput
              placeholder='Matemática'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={cadastroStyle.buttons}
              onChangeText = {this.handleCurso}
            />



            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20}}>seu signo: </Text>
            <TextInput
              placeholder='Áries'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={cadastroStyle.buttons}
              onChangeText = {this.handleSigno}
            />



            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20}}>uma banda: </Text>
            <TextInput
              placeholder='Linking Park'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={cadastroStyle.buttons}
              onChangeText = {this.handleUmaBanda}
            />

            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20}}>uma refeição: </Text>
            <TextInput
              placeholder='Buchada de Bode'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={cadastroStyle.buttons}
              onChangeText = {this.handleUmaRefeicao}
            />

            
                <TouchableOpacity
                      style={{
                        borderWidth: 1, borderColor: '#FFF', marginTop: 20, height: 45, width: 240,
                        borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7ef3e0'

                      }}
                      onPress={() => this.postStufftoRegister() }
                    >
                    <Text style={{color:'white', fontSize: 18}}>Cadastrar</Text>
                </TouchableOpacity>
            
          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
}
//tirei uma view que cobria o botão "Cadastrar", mas acho que eu não precisava ter feito isso
//assim... se quiser por ela ae de novo pra testar, manda ver.