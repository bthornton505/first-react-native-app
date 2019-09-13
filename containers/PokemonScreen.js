import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import Header from '../components/Header'

class PokemonScreen extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'press-start-2p': require('../assets/fonts/PressStart2P-Regular.ttf')
    });

    this.setState({ fontLoaded: true });

    // Build axios request for pulling pokemon data
  };

  render(){
    return(
      <View>
        <Header style={styles} setFont={this.state.fontLoaded} />

        <View style={styles.pokemonContainer}>
        </View>
      </View>
    )
  }
}

export default PokemonScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  headerContainer: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(234, 34, 45)',
    // backgroundColor: 'black',
  },
  header: {
    fontFamily: 'press-start-2p',
    color: 'white',
    fontSize: 45,
    paddingTop: 32,
    top: 10
  },
  pokemonContainer: {
    height: '85%',
    backgroundColor: 'rgb(234, 34, 45)',
  }
});
