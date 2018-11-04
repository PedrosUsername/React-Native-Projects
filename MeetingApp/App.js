import {createStackNavigator} from 'react-navigation';
import login from './Telas/Login';
import menu from './Telas/Menu';
import cadastro from './Telas/Cadastro';
import cadastroperguntas from './Telas/CadastroPerguntas';
import config from './Telas/Configuracao';
import telaTeste from './Telas/telasTeste';
import telaTeste2 from './Telas/telasTeste2';
import homeApp from './Telas/Home';

const App = createStackNavigator({
  Login: {screen: login},
  Home: {screen:  menu},
  Teste2: {screen: telaTeste2},
  Menu: {screen: menu},
  Teste: {screen: telaTeste},
  Configuracao: {screen: config},
  Cadastro: {screen: cadastro},
  CadastroPerguntas: {screen: cadastroperguntas},


});


export default App;
