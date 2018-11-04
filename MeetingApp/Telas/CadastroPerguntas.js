import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, textDecorationLine, ScrollView, KeyboardAvoidingView, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import cadastroStyle from '../Style/cadastroStyle';

//type Props = {};
export default class CadastroPerguntas extends Component {//<Props> {
  render (){
    return (
      <ScrollView>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}} colors={['#9EFBD3', '#57E9F2', '#45D4FB']} style={cadastroStyle.gradientView}>

          <View style={cadastroStyle.viewPrimaria}>

            <Text
            style={{color:'white', fontSize: 50, fontFamily: 'Palatino-Italic', fontStyle: 'italic',}}
            >
            Questionario</Text>

            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 30}}>Pergunta 1: </Text>
            <TextInput
              placeholder='Resposta'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={cadastroStyle.buttons}
            />



            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20}}>Pergunta 2: </Text>
            <TextInput
              placeholder='Resposta'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={cadastroStyle.buttons}
            />



            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20}}>Pergunta 3: </Text>
            <TextInput
              placeholder='Resposta'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={cadastroStyle.buttons}
            />

            <Text style={{alignSelf:'flex-start', borderColor: 'white', borderWidth: 0, color: 'white', fontSize: 20, marginLeft: 25, marginTop: 20}}>Pergunta 4: </Text>
            <TextInput
              placeholder='Resposta'
              placeholderTextColor= 'white'
              selectionColor='white'
              style={cadastroStyle.buttons}
            />

            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10}}>

                    <TouchableOpacity
                      style={{
                        borderWidth: 1, borderColor: '#FFF', marginTop: 20, height: 45, width: 240,
                        borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7ef3e0'

                      }}
                      onPress={() => this.props.navigation.navigate('#')}
                    >
                    <Text style={{color:'white', fontSize: 18}}>Cadastrar</Text>
                    </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
}
