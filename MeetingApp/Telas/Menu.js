import React from 'react';
import { Text, View, Header, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Button title="sair" onPress={this._signOutAsync} />

      </View>
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
          size={50}
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
          size={50}
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
           size={50}
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
            size={50}
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
