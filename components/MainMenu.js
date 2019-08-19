import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MainMenu() {
  return(
    <View style={styles.container}>
      <Text style={styles.menuText}>This is my main menu</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(234, 34, 45)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
    margin: -50,
  },
  menuText: {
    color: 'white',
    fontSize: 30,
  }
});
