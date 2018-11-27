import React from 'react';
import { Text, FlatList, StyleSheet, View, Header, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
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
  constructor(props) {
    super(props)

    this.state = {
      serversResponse: [],
      tags: '',
      loading: false,
    }

    this.getAllofThem()

  }

  //pega todos os usuarios do BD e joga em serversRespose
  getAllofThem(){
    fetch('http://' + ROTEADOR + '/pool_usuarios/')
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
        console.log(responseJson);
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

                  <Text>nenhum usuario encontrado...</Text>
                  <Text>pesquise por:</Text>
                  <Text>usuario!=' '</Text>
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
                  <Text>signo: {item.signo}</Text>
                  <Text>curso: {item.curso}</Text>
                  <Text>uma_banda: {item.uma_banda}</Text>
                  <Text>uma_refeicao: {item.uma_refeicao}</Text>

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
            if (this.state.tags != ''){
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
