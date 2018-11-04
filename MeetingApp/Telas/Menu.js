import React from 'react';
import { Text, View, Header, TextInput, ScrollView, TouchableOpacity, Image, Picker } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, Button, SocialIcon, Avatar } from 'react-native-elements';
import MenuStyle from '../Style/menuStyle';


class HomeScreen extends React.Component {
  render() {
    return (
  <LinearGradient start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}} colors={['#9EFBD3', '#57E9F2', '#45D4FB']} style={MenuStyle.gradientView}>
    <ScrollView>

        <View style={MenuStyle.viewTitulo}>
          <Text style={MenuStyle.viewTituloTexto}>Home!</Text>
        </View>

        <View style={MenuStyle.viewSecundaria}>

              <View style={MenuStyle.viewContainerCentral}>


                        <Image source={require('../img/avatar.png')}
                            style={MenuStyle.viewContainerCentralAvatar}
                        />

                        <Text style={{alignSelf: 'center', fontSize: 22, color: '#57E9F2', fontWeight: 'bold', marginTop: 30}}>Recarregar Combinaçōes</Text>
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

                        <Text style={{alignSelf: 'center', marginTop: 30,marginBottom: 10, fontSize: 22, color: '#57E9F2', fontWeight: 'bold'}}>Localização Atual</Text>

                        <View style={{width: 180, alignSelf: 'center', borderRadius: 30, borderWidth: 0, borderColor: 'black', backgroundColor: '#57E9F2', alignSelf: 'center'}}>
                            <Picker
                            enabled={false}
                            style={{color:'white', backgroundColor: 'transparent', alignSelf: 'center', width: 230, height: 40, opacity: 1, borderRadius: 20, borderColor: 'blue', opacity: 0.6}}


                            placeholder="Selecione o País"
                            mode="dropdown"
                            >
                                <Picker.Item label="            Sala LP - Turma Ladeira"  value="salaLP"/>
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
            borderRadius: 30,marginTop: 40, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={MenuStyle.txtSettings}>Sair</Text>
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
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Estatistica!</Text>

      </View>
    );
  }
}

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
