import React from 'react';
import { View, Text, Image } from 'react-native';
import Images from '../images/spriteCollection';

const Pokemon = (props) => {
  const { pokemon, styles } = props
  const pokemonIndex = pokemon.index

  return(
    <View key={pokemon.item.name}>
      <Image style={styles.pokemonSprite} source={Images[pokemonIndex]} />
      <Text style={styles.pokemon}>{pokemon.item.name}</Text>
    </View>
  )
}

export default Pokemon;
