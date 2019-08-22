import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import Header from './components/Header'
import MainMenu from './containers/MainMenu'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>POKEDEX</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(234, 34, 45)',
  },
  headerText: {
    // fontFamily: 'Press Start 2P',
    color: 'white',
    fontSize: 45,
    paddingTop: 32,
  },
  center: {
    height: '30%',
    alignItems: 'center',
    backgroundColor: 'rgb(234, 34, 45)',
  },
  mainImg: {
    width: 700,
    height: 300,
    shadowOpacity: 1,
    shadowRadius: 23,
  },
  mainMenuContainer: {
    height: '58%',
    backgroundColor: 'rgb(234, 34, 45)',
  },
  pokemonButton: {
    margin: 50,
    padding: 15,
    backgroundColor: '#FFF',
    color: '#FFF'
  },
});
