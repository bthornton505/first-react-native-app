import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Header from './components/Header'
import MainMenu from './containers/MainMenu'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>POKEDEX</Text>
      </View>

      <View style={styles.center}>
        <Text>This is the Center</Text>
      </View>

      <View style={styles.mainMenuContainer}>
        <View style={styles.pokemonButton}>
          <Button
            onPress={() => alert('You clicked the button!')}
            title="It's working"
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
    backgroundColor: 'black',
  },
  headerText: {
    // fontFamily: 'Press Start 2P',
    color: 'white',
    fontSize: 30,
    paddingTop: 32,
  },
  center: {
    height: '40%'
  },
  mainMenuContainer: {
    height: '50%',
    backgroundColor: 'rgb(234, 34, 45)',
  },
  pokemonButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#000',
    color: '#FFF'
  },
});
