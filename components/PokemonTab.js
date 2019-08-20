import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function PokemonTab() {
  return(
    <View style={styles.pokemonButton}>
      <Button
        onPress={() => alert('You clicked the button!')}
        title="Press me"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  pokemonButton: {
    margin: 20,
    padding: 15,
    backgroundColor: 'black',
  },
});
