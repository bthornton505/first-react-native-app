import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as Font from 'expo-font';

import Header from './components/Header'
import MainMenu from './containers/MainMenu'

export default class App extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'press-start-2p': require('./assets/fonts/PressStart2P-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          {
            this.state.fontLoaded ? (
              <Text style={styles.headerText}>POKEDEX</Text>
            ) : null
          }
        </View>

        <View style={styles.center}>
          <Image style={styles.mainImg} source={require('./images/derp-pikachu-v2.png')} />
        </View>

        <View style={styles.mainMenuContainer}>
          <View style={styles.pokemonButton}>
            <Button
              onPress={() => alert('151 Awesome Pokemon!')}
              title="Pokemon"
            />
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(234, 34, 45)',
    // backgroundColor: 'black',
  },
  headerText: {
    fontFamily: 'press-start-2p',
    color: 'white',
    fontSize: 45,
    paddingTop: 32,
    top: 10
  },
  center: {
    height: '27%',
    alignItems: 'center',
    backgroundColor: 'rgb(234, 34, 45)',
  },
  mainImg: {
    width: 700,
    height: 300,
    position: 'relative',
    bottom: 30,
    shadowOpacity: 1,
    shadowRadius: 23,
  },
  mainMenuContainer: {
    height: '58%',
    backgroundColor: 'rgb(234, 34, 45)',
    // backgroundColor: 'black',
  },
  pokemonButton: {
    margin: 50,
    padding: 15,
    backgroundColor: '#FFF',
    color: '#FFF'
  },
});
