import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Header from './components/Header'
import MainMenu from './containers/MainMenu'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.headerStyle}>
        <Text style={styles.menuText}>POKEDEX</Text>
      </View>

      <View style={styles.pokemonButton}>
        <Button
          onPress={() => alert('You clicked the button!')}
          title="Press me"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(234, 34, 45)',
    justifyContent: 'center',
  },
  headerStyle: {
    backgroundColor: 'black',
    padding: 20,
  },
  menuText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 40,
  },
  pokemonButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#000',
    color: '#FFF'
  },
});
