import React from 'react';
import { Text, View, Header } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon, Button, SocialIcon, Avatar } from 'react-native-elements';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>

        <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
        />


        <Button
  title="LOADING BUTTON"
  loading
  loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
  titleStyle={{ fontWeight: "700" }}
  buttonStyle={{
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }}
  containerStyle={{ marginTop: 20 }}
/>

<Avatar
  size="small"
  rounded
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>

      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>

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
      tabBarLabel:'Home',
      tabBarIcon: ({tintColor})=>(
        <Icon
          name='ios-home'
          type='ionicon'
          color='orange'
        />
      )
    }
  },
  Settings: { screen: SettingsScreen,
    navigationOptions:{
      tabBarLabel:'Settings',
      tabBarIcon: ({tintColor})=>(
        <Icon
          name='ios-settings'
          type='ionicon'
          color='orange'
        />
      )
    }
   },
   MensagemApp: { screen: Mensagem,
     navigationOptions:{
       tabBarLabel:'Mensagem',
       tabBarIcon: ({tintColor})=>(
         <Icon
           name='ios-text'
           type='ionicon'
           color='orange'
         />
       )
     }
    },
    EstatisticaApp: { screen: Estatistica,
      navigationOptions:{
        tabBarLabel:'Estatisticas',
        tabBarIcon: ({tintColor})=>(
          <Icon
            name='md-analytics'
            type='ionicon'
            color='orange'
          />
        ),
        tabBarOptions: {
          activeBackgroundColor: 'orange',
        }
      }
    }
},//aqui termina o navigatio
{
  order: ['Home','MensagemApp', 'EstatisticaApp', 'Settings'],
  activeBackgroundColor: 'orange',
  shifting: true
}


);

/*tabBarOptions: {
  activeBackgroundColor: 'orange',
  inactiveBackgroundColor: '#EFEFEF',
  activeTintColor: '#ffffff',
  inactiveTintColor: 'pink',
  showIcon: true,
},*/
