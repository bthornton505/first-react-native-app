import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import Header from '../components/Header'
import AllPokemon from '../components/AllPokemon';
import axios from 'axios';

class PokemonScreen extends Component {
  state = {
    fontLoaded: false,
    pokemon: [],
    loading: false,
    fetched: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'press-start-2p': require('../assets/fonts/PressStart2P-Regular.ttf')
    });
    this.setState({ fontLoaded: true });

    // Build axios request for pulling pokemon data
    this.setState({ loading: true })
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151/`)
        .then(response => this.setState({ pokemon: response.data, loading: false, fetched: true}))
  };

  render(){
    // console.log(this.state.pokemon)
    const { fetched, loading, pokemon } = this.state
    let content;

    if (fetched){
      content = <AllPokemon styles={styles} pokemon={pokemon} />
    } else if (loading && !fetched){
      content = <Text>Loading...</Text>
    } else {
      content = <Text>Something went wrong!</Text>
    }

    return(
      <View>
        <Header style={styles} setFont={this.state.fontLoaded} />

        <View style={styles.pokemonContainer}>
          {content}
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
  },
  pokemon: {
    fontFamily: 'press-start-2p',
    fontSize: 18,
    color: 'white',
    height: 44,
    padding: 10,
    borderStyle: 'solid',
    borderTopWidth: 5,
    borderBottomWidth: 5
  },
  pokemonSprite: {
    // width: 700,
    // height: 300,
    // position: 'relative',
    // bottom: 25,
    // shadowOpacity: 1,
    // shadowRadius: 23,
  }
});
