import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, Picker, textDecorationLine, ScrollView, KeyboardAvoidingView, ImageBackground, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
 import SelectInput from 'react-native-select-input-ios';
 class PickerExample extends Component {
    state = {user: ''}
    updateUser = (user) => {
       this.setState({ user: user })
    }
    render() {
       return (
          <View>
             <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                <Picker.Item label = "Steve" value = "steve" />
                <Picker.Item label = "Ellen" value = "ellen" />
                <Picker.Item label = "Maria" value = "maria" />
             </Picker>
             <Text style = {styles.text}>{this.state.user}</Text>
          </View>
       )
    }
 }

 const styles = StyleSheet.create({
    text: {
       fontSize: 30,
       alignSelf: 'center',
       color: 'red'
    }
 });
 export default PickerExample;
