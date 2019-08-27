import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import PokemonScreen from './PokemonScreen'

const MainMenu = (props) => {
  return(
    <View style={props.style.mainMenuContainer}>
      <View style={props.style.buttonContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Pokemon')}>
          {
            props.setFont ? (
              <Text style={props.style.button}>
                Pokemon
              </Text>
            ) : null
          }
        </TouchableOpacity>
      </View>
      <View style={props.style.buttonContainer}>
        <TouchableOpacity onPress={props.handlePress}>
          {
            props.setFont ? (
              <Text style={props.style.button}>
                Items
              </Text>
            ) : null
          }
        </TouchableOpacity>
      </View>
      <View style={props.style.buttonContainer}>
        <TouchableOpacity onPress={props.handlePress}>
          {
            props.setFont ? (
              <Text style={props.style.button}>
                Moves
              </Text>
            ) : null
          }
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MainMenu;
