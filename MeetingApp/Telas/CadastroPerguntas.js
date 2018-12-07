import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, textDecorationLine, ScrollView, KeyboardAvoidingView, ImageBackground, Picker} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import cadastroStyle from '../Style/cadastroStyle';
import RNPickerSelect from 'react-native-picker-select';

// Coloque o IP do roteador da rede que
// conecta o servidor aos dispositivos
// moveis dos usuarios
var ROTEADOR = 'trabalhodelp.herokuapp.com';
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

    this.inputRefs = {};

    this.state = {
      usuario: user,
      senha: password,
      full_nome: fullname,
      //uma_cor: '',
      //um_esporte: '',
      //uma_divercao: '',
      //um_estilo: '',
      //personalidade: '',
      //uma_area: '',
      telefone: '',
      descricao: '',

      uma_cor: undefined,
            items: [
                {
                    label: 'Vermelho',
                    value: 'Vermelho',
                },
                {
                    label: 'Azul',
                    value: 'Azul',
                },
                {
                    label: 'Amarelo',
                    value: 'Amarelo',
                },
                {
                    label: 'Branco',
                    value: 'Branco',
                },
                {
                    label: 'Roxo',
                    value: 'Roxo',
                },
                {
                    label: 'Cinza',
                    value: 'Cinza',
                },
                {
                    label: 'Verde',
                    value: 'Verde',
                },
                {
                    label: 'Rosa',
                    value: 'Rosa',
                },
                {
                    label: 'Preto',
                    value: 'Preto',
                },
            ],
    um_esporte: undefined,
            items2: [
                {
                    label: 'Futebol',
                    value: 'Futebol',
                },
                {
                    label: 'Basquete',
                    value: 'Basquete',
                },
                {
                    label: 'Volei',
                    value: 'Volei',
                },
                {
                    label: 'Handball',
                    value: 'Handball',
                },
                {
                    label: 'Natação',
                    value: 'Natação',
                },
                {
                    label: 'Sedentario',
                    value: 'Sedentario',
                },
            ],
        uma_diversao: undefined,
            items3: [
                {
                    label: 'Cinema',
                    value: 'Cinema',
                },
                {
                    label: 'Balada',
                    value: 'Balada',
                },
                {
                    label: 'Social',
                    value: 'Social',
                },
                {
                    label: 'Netflix em casa',
                    value: 'Netflix em casa',
                },
                {
                    label: 'Sair com os amigos',
                    value: 'Sair com os amigos',
                },
                {
                    label: 'Jogar video games',
                    value: 'Jogar video games',
                }
            ],
        um_estilo: undefined,
            items4: [
              {
                label:'Pop',
                value: 'Pop'
              },
              {
                label:'Funk',
                value: 'Funk'
              },
              {
                label:'Sertanejo',
                value: 'Sertanejo'
              },
              {
                label:'Rock',
                value: 'Rock'
              },
              {
                label:'Rap',
                value: 'Rap'
              },
              {
                label:'Forro',
                value: 'Forro'
              },
              {
                label:'EDM',
                value: 'EDM'
              },
            ],
        personalidade: undefined,
            items5: [
              {
                label:'Extrovertido',
                value: 'Extrovertido'
              },
              {
                label:'Introvertido',
                value: 'Introvertido'
              },
              {
                label:'Sentimental extrovertido',
                value: 'Sentimental extrovertido'
              },
              {
                label:'Sentimental introvertido',
                value: 'Sentimental introvertido'
              },
              {
                label:'Intuitivo extrovertido',
                value: 'Intuitivo extrovertido'
              },
              {
                label:'Intuitivo introvertido',
                value: 'Intuitivo introvertido'
              },
            ],
        uma_area: undefined,
            items6: [
              {
                label:'Humanas',
                value: 'Humanas'
              },
              {
                label:'Exatas',
                value: 'Exatas'
              },
              {
                label:'Biologicas',
                value: 'Biologicas'
              }
            ],
        };
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
        nome: this.state.full_nome,
        uma_cor: this.state.uma_cor,
        um_esporte: this.state.um_esporte,
        uma_diversao: this.state.uma_diversao,
        um_estilo: this.state.um_estilo,
        uma_area: this.state.uma_area,
        personalidade: this.state.personalidade,
        telefone: this.state.telefone,
        descricao: this.state.descricao

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


  handleUmaCor = (text) => {
    this.setState({ uma_cor: text })
  }
  handleUmEsporte = (text) => {
    this.setState({ um_esporte: text });
  }
  handleUmaDivercao = (text) => {
    this.setState({ uma_diversao: text });
  }
  handleUmEstilo = (text) => {
    this.setState({ um_estilo: text });
  }
  handlePersonalidade = (text) => {
    this.setState({ personalidade: text });
  }
  handleUmaArea = (text) => {
    this.setState({ uma_area: text });
  }
  handleTelefone = (text) => {
    this.setState({ telefone: text });
  }

  render (){


    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}} colors={['#9EFBD3', '#57E9F2', '#45D4FB']} style={cadastroStyle.gradientView}>

            <View style={cadastroStyle.viewPrimaria}>
                <ScrollView>
                    <Text style={{color: 'white', fontSize: 15, marginTop: 20}}>* Qual sua cor favorita?</Text>
                    <RNPickerSelect
                       placeholder={{
                           label: 'Escolha sua cor',
                           value: null,
                       }}
                       placeholderTextColor= 'white'
                       items={this.state.items}

                       onValueChange = {this.handleUmaCor}

                       onUpArrow={() => {
                           this.inputRefs.name.focus();
                       }}
                       onDownArrow={() => {
                           this.inputRefs.picker2.togglePicker();
                       }}
                       style={{}}
                       value={this.state.corFavorita}
                       ref={(el) => {
                           this.inputRefs.picker = el;
                       }}
                    />



                    <Text style={{color: 'white', fontSize: 15, marginTop: 20}}>* Qual seu esporte favorito?</Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Select a sport...',
                            value: null,
                        }}
                        placeholderTextColor= 'white'
                        items={this.state.items2}

                        onValueChange = {this.handleUmEsporte}

                        onUpArrow={() => {
                            this.inputRefs.picker.togglePicker();
                        }}
                        onDownArrow={() => {
                            this.inputRefs.company.focus();
                        }}
                        style={{}}
                        value={this.state.favSport}
                        ref={(el) => {
                            this.inputRefs.picker2 = el;
                        }}
                    />

                    <Text style={{color: 'white', fontSize: 15, marginTop: 20}}>* Qual dos programas abaixo lhe agrada mais?</Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Selecione o que mais gosta',
                            value: null,
                        }}
                        placeholderTextColor= 'white'
                        items={this.state.items3}

                        onValueChange = {this.handleUmaDivercao}

                        onUpArrow={() => {
                            this.inputRefs.picker.togglePicker();
                        }}
                        onDownArrow={() => {
                            this.inputRefs.company.focus();
                        }}
                        style={{}}
                        value={this.state.diversao}
                        ref={(el) => {
                            this.inputRefs.picker2 = el;
                        }}
                    />

                    <Text style={{color: 'white', fontSize: 15, marginTop: 20}}>* Qual seu estilo musial preferido?</Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Selecione o que mais gosta',
                            value: null,
                        }}
                        placeholderTextColor= 'white'
                        items={this.state.items4}
                        onValueChange = { this.handleUmEstilo }
                        onUpArrow={() => {
                            this.inputRefs.picker.togglePicker();
                        }}
                        onDownArrow={() => {
                            this.inputRefs.company.focus();
                        }}
                        style={{}}
                        value={this.state.musica}
                        ref={(el) => {
                            this.inputRefs.picker2 = el;
                        }}
                    />

                    <Text style={{color: 'white', fontSize: 15, marginTop: 20}}>* Como vc descreveria sua personalidade?</Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Selecione o que mais gosta',
                            value: null,
                        }}
                        placeholderTextColor= 'white'
                        items={this.state.items5}

                        onValueChange ={ this.handlePersonalidade }

                        onUpArrow={() => {
                            this.inputRefs.picker.togglePicker();
                        }}
                        onDownArrow={() => {
                            this.inputRefs.company.focus();
                        }}
                        style={{color: 'white'}}
                        value={this.state.personalidade}
                        ref={(el) => {
                            this.inputRefs.picker2 = el;
                        }}
                    />

                    <Text style={{color: 'white', fontSize: 15, marginTop: 20}}>* Qual sua area preferida?</Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Selecione o que mais gosta',
                            value: null,
                        }}
                        placeholderTextColor= 'white'
                        items={this.state.items6}

                        onValueChange={ this.handleUmaArea }

                        onUpArrow={() => {
                            this.inputRefs.picker.togglePicker();
                        }}
                        onDownArrow={() => {
                            this.inputRefs.company.focus();
                        }}
                        style={{color: 'white'}}
                        value={this.state.materias}
                        ref={(el) => {
                            this.inputRefs.picker2 = el;
                        }}
                    />

                    <Text style={{color: 'white', fontSize: 15, marginTop: 20}}>Numero do celular:</Text>
                        <TextInput
                        placeholder='5561*********'
                        placeholderTextColor= 'white'
                        selectionColor='white'
                        style={cadastroStyle.descricaoInput}
                        onChangeText = {this.handleTelefone}
                    />

                    <Text style={{color: 'white', fontSize: 15}}>Em poucas palavras, como vc se descreveria?</Text>
                    <TextInput
                        ref={(el) => {
                            this.inputRefs.company = el;
                        }}
                        returnKeyType="go"
                        enablesReturnKeyAutomatically
                        style={cadastroStyle.descricaoInput}
                        onValueChange={ this.handleDescricao }
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

                </ScrollView>
            </View>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        paddingHorizontal: 10,

    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      backgroundColor: 'transparent',
      borderColor: 'white',
      width: 400,
      borderWidth: 1,
      borderRadius: 20,
      marginTop: 10
    },
});
