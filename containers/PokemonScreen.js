import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import Header from '../components/Header'
import AllPokemon from '../components/AllPokemon';
import axios from 'axios';

class PokemonScreen extends Component {
  state = {
    fontLoaded: false,
    pokemon: []
  };

  async componentDidMount() {
    await Font.loadAsync({
      'press-start-2p': require('../assets/fonts/PressStart2P-Regular.ttf')
    });

    this.setState({ fontLoaded: true });

    // Build axios request for pulling pokemon data
    // let i = 0;
    // do
    //   axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    //     .then(response => this.setState({ pokemon: response.data}), i += 1)
    // while (i < 151)
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151/`)
        .then(response => this.setState({ pokemon: response.data}))
  };

  render(){
    // console.log(this.state.pokemon)
    return(
      <View>
        <Header style={styles} setFont={this.state.fontLoaded} />

        <View style={styles.pokemonContainer}>
          <AllPokemon pokemon={this.state.pokemon} />
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
