import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, textDecorationLine, ScrollView, KeyboardAvoidingView, ImageBackground, Picker} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import cadastroStyle from '../Style/cadastroStyle';
import RNPickerSelect from 'react-native-picker-select';

type Props = {};
export default class CadastroPerguntas extends Component<Props> {



  constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            corFavorita: undefined,
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
            favSport: undefined,
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
            diversao: undefined,
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
                }
            ],
            musica: undefined,
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
            materias: undefined,
            items6: [
              {
                label:'Humanas',
                value: 'Humanas'
              },
              {
                label:'Exatas',
                value: 'Exatas'
              },
            ],
        };
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
                       onValueChange={(value) => {
                           this.setState({
                               corFavorita: value,
                           });
                       }}
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
                       onValueChange={(value) => {
                           this.setState({
                               favSport: value,
                           });
                       }}
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
                       onValueChange={(value) => {
                           this.setState({
                               diversao: value,
                           });
                       }}
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
                       onValueChange={(value) => {
                           this.setState({
                               musica: value,
                           });
                       }}
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
                       onValueChange={(value) => {
                           this.setState({
                               personalidade: value,
                           });
                       }}
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
                       onValueChange={(value) => {
                           this.setState({
                               materias: value,
                           });
                       }}
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


                   <Text style={{color: 'white', fontSize: 15}}>Em poucas palavras, como vc se descreveria?</Text>
                   <TextInput
                       ref={(el) => {
                           this.inputRefs.company = el;
                       }}
                       returnKeyType="go"
                       enablesReturnKeyAutomatically
                       style={cadastroStyle.descricaoInput}
                       onSubmitEditing={() => {
                           Alert.alert('Success', 'Form submitted', [{ text: 'Okay', onPress: null }]);
                       }}
                   />

                   <TouchableOpacity style={cadastroStyle.buttons}>
                      <Text style={{color: 'white'}}>Enviar</Text>
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
