import React from 'react';
import { Text, FlatList, View, Header, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, Picker, Linking } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, Button, SocialIcon, Avatar } from 'react-native-elements';
import MenuStyle from '../Style/menuStyle';

import Loader from '../Telas/Loader';

// Coloque o IP do roteador da rede que
// conecta o servidor aos dispositivos
// moveis dos usuarios
var ROTEADOR = 'trabalhodelp.herokuapp.com';
// Celular Pedro ---> '192.168.43.176:3000'
// RoteadorCasa Pedro ---> '192.168.0.2:3000'
// Heroku ---> 'trabalhodelp.herokuapp.com'
user = '';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    // recebe parametros de Login.js
    const { navigation } = this.props;
    user = navigation.getParam('user', 'x');

    this.state = {
      usuario: user,
      local: 'Sala LP - Turma Ladeira',
      numAleatorio: 'null',
      recebeCaminho: 'img/avatares/1.png'
    }
  }


  render() {
    return (
  <LinearGradient start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}} colors={['#9EFBD3', '#57E9F2', '#45D4FB']} style={MenuStyle.gradientView}>
    <ScrollView>

        <View style={MenuStyle.viewSecundaria}>

              <View style={MenuStyle.viewContainerCentral}>


                        <Image source={require(`../img/avatares/1.png`)}
                            style={MenuStyle.viewContainerCentralAvatar}
                        />

                        <Text style={{alignSelf: 'center', fontSize: 18, color: '#57E9F2', fontWeight: 'bold',marginTop: 20}} >{this.state.usuario}</Text>
                        <Text style={{alignSelf: 'center', fontSize: 18, color: '#57E9F2', fontWeight: 'bold', marginTop: 30}}>Recarregar Combinaçōes</Text>
                      <TouchableOpacity
                        style={{borderColor: 'black', borderWidth: 0, width: 130, height: 30, alignSelf: 'center', backgroundColor: '#7ef3e0', borderRadius: 20, marginTop: 10, justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => alert('funcao esta sendo criada')}

                      >
                          <Icon
                            name='ios-refresh'
                            type='ionicon'
                            color='#fff'
                            size={25}
                          />
                      </TouchableOpacity>

                        <Text style={{alignSelf: 'center', marginTop: 30,marginBottom: 10, fontSize: 18, color: '#57E9F2', fontWeight: 'bold'}}>Localização Atual</Text>

                        <View style={{width: 180, alignSelf: 'center', borderRadius: 30, borderWidth: 0, borderColor: 'black', backgroundColor: '#57E9F2', alignSelf: 'center'}}>
                            <Picker
                            enabled={false}
                            style={{color:'white', backgroundColor: 'transparent', alignSelf: 'center', width: 230, height: 25, opacity: 1, borderRadius: 20, borderColor: 'blue', opacity: 0.6}}


                            placeholder="Selecione o País"
                            mode="dropdown"
                            >
                                <Picker.Item label={'         ' + this.state.local}  value="salaLP"/>
                            </Picker>
                        </View>
                    <TouchableOpacity style={MenuStyle.btnContainerCentral}>
                      <Text style={MenuStyle.textBtnContainerCentral}>Alterar Localização</Text>
                    </TouchableOpacity>
              </View>

        </View>
    </ScrollView>
  </LinearGradient>
    );
  }
}

class SettingsScreen extends React.Component {
  _signOutAsync = async () => {

    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}} colors={['#9EFBD3', '#57E9F2', '#45D4FB']} style={MenuStyle.gradientView}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Text style={{fontSize: 55, color: 'white'}} >Configurações</Text>

          <TouchableOpacity style={MenuStyle.btnSetting}>
              <Text style={MenuStyle.txtSettings}>Alterar nome de Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={MenuStyle.btnSetting}>
              <Text style={MenuStyle.txtSettings}>Alterar Senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={MenuStyle.btnSetting}>
              <Text style={MenuStyle.txtSettings}>Editar Cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={MenuStyle.btnSetting}>
              <Text style={MenuStyle.txtSettings}>Alterar Preferências</Text>
          </TouchableOpacity>

          <TouchableOpacity style={MenuStyle.btnSetting}>
              <Text style={MenuStyle.txtSettings}>Alterar Usuário</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width: 150, height: 40,  backgroundColor: '#fff',
            borderRadius: 30,marginTop: 40, justifyContent: 'center', alignItems: 'center'}}
            onPress={this._signOutAsync}
            >
              <Text style={{color: '#45D4FB' }}>Sair</Text>
          </TouchableOpacity>

          </View>
      </LinearGradient>
    );
  }
}

class Mensagem extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Mensagem!</Text>

      </View>
    );
  }
}
/****************************************** ESTATISTICA ********************************************/
class Estatistica extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      usuario: user,
      serversResponse: [],
      tags: '',
      loading: false,
    }

    this.getAllofThem()

  }


  //pega todos os usuarios do BD e joga em serversRespose
  getAllofThem(){
    fetch('http://' + ROTEADOR + '/pool_usuarios/', {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        usuario: this.state.usuario

      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {

      console.log(responseJson);
      this.setState({ serversResponse: responseJson, loading: false });

    })
    .catch((error) => {
      console.error(error);
    });
  }
  //filtra os resultados com base nas "tags"
  postTags(){

    fetch('http://' + ROTEADOR + '/pool_filtrados/', {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        data: this.state.tags

      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState( {serversResponse: responseJson, loading: false} );
    })
    .catch((error) => {
      alert("erro de sintaxe.");
      this.setState( {loading: false} );
    });



  }

  renderMessage = () => {
    if(this.state.serversResponse.length < 1){
        return(
                <View style={{justifyContent: 'center', alignItems: 'center', color: 'white' }}>

                  <Text style={{color: 'white', fontSize:15, lineHeight: 25 }}>
                    No momento não existem usuarios compativeis com você { this.state.usuario }.
                  </Text>
                  <Text style={{color: 'white', fontSize:15, lineHeight: 25 }}>
                   Para poder consultar usuarios que possuem algum tipo de caracteristica que lhe interessa, pesquise por: 'nome da caracteristica'='escolha da sua preferencia'
                  </Text>

                </View>
        );
    }else{
        return(
          <FlatList
          data = { this.state.serversResponse }
          renderItem={
            ({item}) =>
                <View style={{flex:1, backgroundColor: '#fff',padding: 1, marginTop: 10, width: 290, borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start'}}>

                  <Text style={{marginLeft: 5, marginTop: 20, color: '#45D4FB', fontSize: 15, fontStyle: 'italic', fontWeight: 'bold'}}>usuario: <Text style={{color: '#555'}}>{item.usuario}</Text></Text>
                  <Text style={{marginLeft: 5, marginTop: 10, color: '#45D4FB', fontSize: 15, fontStyle: 'italic', fontWeight: 'bold'}}>uma_cor: <Text style={{color: '#555'}}>{item.uma_cor}</Text></Text>
                  <Text style={{marginLeft: 5, marginTop: 10, color: '#45D4FB', fontSize: 15, fontStyle: 'italic', fontWeight: 'bold'}}>um_esporte: <Text style={{color: '#555'}}>{item.um_esporte}</Text></Text>
                  <Text style={{marginLeft: 5, marginTop: 10, color: '#45D4FB', fontSize: 15, fontStyle: 'italic', fontWeight: 'bold'}}>uma_diversao <Text style={{color: '#555'}}>{item.uma_diversao}:</Text></Text>
                  <Text style={{marginLeft: 5, marginTop: 10, color: '#45D4FB', fontSize: 15, fontStyle: 'italic', fontWeight: 'bold'}}>um_estilo: <Text style={{color: '#555'}}>{item.um_estilo}</Text></Text>
                  <Text style={{marginLeft: 5, marginTop: 10, color: '#45D4FB', fontSize: 15, fontStyle: 'italic', fontWeight: 'bold'}}>personalidade: <Text style={{color: '#555'}}>{item.personalidade}</Text></Text>
                  <TouchableOpacity><Text style={{marginLeft: 5, marginTop: 10, color: '#45D4FB', fontSize: 15, fontStyle: 'italic', fontWeight: 'bold'}}>telefone: <Text style={{color: '#555'}}>{item.telefone}</Text></Text></TouchableOpacity>

                  <TouchableOpacity style={{marginLeft: 5, borderColor: 'white', borderWidth: 1, borderRadius:20, justifyContent: 'center', alignItems: 'center', width: 150, height: 30, marginTop: 20, backgroundColor: '#9EFBD3'}}
                    onPress={() => {
                        Linking.openURL(`https://api.whatsapp.com/send?phone=${item.telefone}&text=Olá%20Bom%20Dia!!!!`);
                    }}
                  >

                        <Text style={{alignSelf: 'center', color: '#fff', fontSize: 15, fontStyle: 'italic', fontWeight: 'bold'}}>Chat</Text>

                  </TouchableOpacity>

                </View>
              }
          keyExtractor={(item, index) => index.toString()}
        />
        );
    }
}




  handleTags = (text) => {
    this.setState({ tags: text })
  }



  render() {
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}} colors={['#9EFBD3', '#57E9F2', '#45D4FB']} style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <View>
                  <ScrollView>
                    <Loader
                      loading = {this.state.loading} />

                    <TextInput
                      style={{height: 40, borderWidth: 1, borderColor: 'white', marginTop: 20, width: 350, alignSelf: 'center', borderRadius: 20, backgroundColor: 'white', color: '#45D4FB'}}
                      placeholder="usuario='Pedro' AND um_estio='Pop'"
                      placeholderTextColor= '#45D4FB'
                      selectionColor='white'
                      onChangeText = {this.handleTags}
                    />

                    <TouchableOpacity
                        color={'blue'}
                        onPress={ () => {
                          if ((this.state.tags != '')&&(this.state.tags != ' ')){
                            this.setState({ loading: true })
                            this.postTags()

                          }else{
                            this.setState({ loading: true })
                            this.getAllofThem()
                          }
                          } }
                          style={{borderColor: 'white', borderWidth: 1, borderRadius:20, justifyContent: 'center', alignItems: 'center', width: 150, height: 30, alignSelf: 'center', marginTop: 20, backgroundColor: '#9EFBD3'}}
                    >
                    <Text style={{color: 'white', fontSize: 15, fontStyle: 'italic'}}>Pesquisar</Text>
                    </TouchableOpacity>

                    <View style={{flex: 1, marginTop: 10, marginBottom: 5, color: 'white', width: 290, borderRadius:20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
                        {this.renderMessage()}
                    </View>

                    </ScrollView>
                  </View>
</LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },

  h1: {
    fontSize: 40,
    padding: 20,
  },

  buttons: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  item: {
    marginTop: 20,
    backgroundColor: '#45D4FB',
  }
});


export default createBottomTabNavigator({
  Home: { screen: HomeScreen,
    navigationOptions:{
      tabBarLabel: 'jhi',
      tabBarIcon: ({tintColor})=>(
        <Icon
          name='ios-home'
          type='ionicon'
          color='#fff'
          size={30}
        />
      ),
      tabBarOptions: {
        showLabel: false,
        activeBackgroundColor: '#7ef3e0',
        inactiveBackgroundColor: '#45D4FB',
        inactiveTintColor: '#7ef3e0',
        activeTintColor: 'red'
      },
    }
  },
  Settings: { screen: SettingsScreen,
    navigationOptions:{
      tabBarLabel:false,
      tabBarIcon: ({tintColor})=>(
        <Icon
          name='ios-settings'
          type='ionicon'
          color='#fff'
          size={30}
        />
      ),
      tabBarOptions: {
        showLabel: false,
        activeBackgroundColor: '#7ef3e0',
        inactiveBackgroundColor: '#45D4FB',
        inactiveTintColor: '#7ef3e0',
        activeTintColor: 'white'
      },
    }
   },
   MensagemApp: { screen: Mensagem,
     navigationOptions:{
       tabBarLabel:false,
       tabBarIcon: ({tintColor})=>(
         <Icon
           name='ios-text'
           type='ionicon'
           color='#fff'
           size={30}
         />
       ),
       tabBarOptions: {
         showLabel: false,
         activeBackgroundColor: '#7ef3e0',
         inactiveBackgroundColor: '#45D4FB',
         inactiveTintColor: '#7ef3e0',
         activeTintColor: 'white'
       },
     }
    },
    EstatisticaApp: { screen: Estatistica,
      navigationOptions:{
        tabBarLabel:false,
        tabBarIcon: ({tintColor})=>(
          <Icon
            name='md-analytics'
            type='ionicon'
            color='#fff'
            size={30}
          />
        ),
        tabBarOptions: {
          showLabel: false,
          activeBackgroundColor: '#7ef3e0',
          inactiveBackgroundColor: '#45D4FB',
          inactiveTintColor: '#7ef3e0',
          activeTintColor: 'white'
        },
      }
    }
},//aqui termina o navigatio
{
  order: ['Home','MensagemApp', 'EstatisticaApp', 'Settings'],
},

/*tabBarOptions: {
  showLabel: false
},*/


);

/*tabBarOptions: {
  activeBackgroundColor: 'orange',
  inactiveBackgroundColor: '#EFEFEF',
  activeTintColor: '#ffffff',
  inactiveTintColor: 'pink',
  showIcon: true,
},*/
