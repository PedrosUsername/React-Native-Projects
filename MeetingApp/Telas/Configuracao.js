import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, textDecorationLine, ScrollView, KeyboardAvoidingView, ImageBackground} from 'react-native';
import MenuStyle from '../Style/menuStyle';
import LinearGradient from 'react-native-linear-gradient'

type Props = {};
export default class Menu extends Component<Props> {
  render() {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}} colors={['#9EFBD3', '#57E9F2', '#45D4FB']} style={MenuStyle.gradientView}>
      </LinearGradient>
    );
  }
}
