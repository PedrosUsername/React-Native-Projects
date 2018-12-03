import React from 'react';
import { Text, FlatList, View, Header, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, Picker } from 'react-native';
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
      local: 'Sala LP - Turma Ladeira'
    }
  }
  
  render() {
    return (
  <LinearGradient start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}} colors={['#9EFBD3', '#57E9F2', '#45D4FB']} style={MenuStyle.gradientView}>
    <ScrollView>

        <View style={MenuStyle.viewSecundaria}>

              <View style={MenuStyle.viewContainerCentral}>


                        <Image source={require('../img/avatar.png')}
                            style={MenuStyle.viewContainerCentralAvatar}
                        />
                        <Text style={{alignSelf: 'center', fontSize: 18, color: '#57E9F2', fontWeight: 'bold',marginTop: 20}} >{this.state.usuario}</Text>
                        <Text style={{alignSelf: 'center', fontSize: 18, color: '#57E9F2', fontWeight: 'bold', marginTop: 30}}>Recarregar Combinaçōes</Text>
                      <TouchableOpacity
                        style={{borderColor: 'black', borderWidth: 0, width: 130, height: 30, alignSelf: 'center', backgroundColor: '#7ef3e0', borderRadius: 20, marginTop: 10, justifyContent: 'center', alignItems: 'center'}}
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
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                  <Text>no momento não existem</Text>
                  <Text>usuarios compativeis com você { this.state.usuario }.</Text>
                  <Text>pesquise por:</Text>
                  <Text>usuario!=''</Text>
                  <Text>para ver todo os usuarios</Text>
                  <Text>registrados.</Text>

                </View>
        );
    }else{
        return(
          <FlatList
          data = { this.state.serversResponse }
          renderItem={
            ({item}) => 
                <View style={styles.item}>

                  <Text>usuario: {item.usuario}</Text>
                  <Text>uma_cor: {item.uma_cor}</Text>
                  <Text>um_esporte: {item.um_esporte}</Text>
                  <Text>uma_divercao: {item.uma_diversao}</Text>
                  <Text>um_estilo: {item.um_estilo}</Text>
                  <Text>personalidade: {item.personalidade}</Text>
                  <Text>telefone: {item.telefone}</Text>

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
    <View style={{flex: 1}}>
      <Loader 
        loading = {this.state.loading} />

      <TextInput
        style={{height: 60}}
        placeholder="usuario='Pedro' AND signo='peixes'"
        placeholderTextColor= '#aaa'
        selectionColor='white'
        onChangeText = {this.handleTags}
      />

      <Button
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
          title="pesquisar"
      />

      <View style={styles.container} style={{flex: 1}}>
          {this.renderMessage()}
      </View>
            
    </View>

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
