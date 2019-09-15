import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native';

const AllPokemon = (props) => {
  const { pokemon, id } = props
  return(
    <View>
      <FlatList
        data={pokemon.results}
        renderItem={(pokemon) =>
          <Text style={styles.pokemon}>{pokemon.item.name}</Text>
        }
      />
    </View>
  )
}

export default AllPokemon;

const styles = StyleSheet.create({
  pokemon: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderStyle: 'solid',
    borderTopWidth: 5,
    borderBottomWidth: 5
  },
})
