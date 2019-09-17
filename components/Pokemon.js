import React from 'react';
import { View, Text, Image } from 'react-native';

const Pokemon = (props) => {
  const { pokemon, styles } = props
  const pokemonIndex = pokemon.index + 1
  const sprite = `../images/sprites/1.png`
  return(
    <View key={pokemon.item.name}>
      <Image style={styles.pokemonSprite} source={require(sprite)} />
      <Text style={styles.pokemon}>{pokemon.item.name}</Text>
    </View>
  )
}

export default Pokemon;
