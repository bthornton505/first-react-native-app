import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Pokemon from './Pokemon';

const AllPokemon = (props) => {
  const { pokemon, styles } = props
  return(
    <View style={styles.pokemonList}>
      <FlatList
        data={pokemon.results}
        renderItem={(pokemon) =>
          // console.log(pokemon)
          <Pokemon styles={styles} pokemon={pokemon}/>
        }
      />
    </View>
  )
}

export default AllPokemon;

// const styles = StyleSheet.create({
//   pokemon: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//     borderStyle: 'solid',
//     borderTopWidth: 5,
//     borderBottomWidth: 5
//   },
// }

// What I have in pokemon object
// Object {
//   "index": 9,
//   "item": Object {
//     "name": "caterpie",
//     "url": "https://pokeapi.co/api/v2/pokemon/10/",
//   },
// }
