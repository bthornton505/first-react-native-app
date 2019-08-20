import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PokemonTab from '../components/PokemonTab'

export default class MainMenu extends Component {
  render() {
    return(
      <View style={styles.mainMenuStyle}>
        <PokemonTab />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainMenuStyle: {
    height: 800,
  }
})
