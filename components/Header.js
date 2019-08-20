import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return(
    <View style={styles.headerStyle}>
      <Text style={styles.menuText}>POKEDEX</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  menuText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 30,
  }
});
