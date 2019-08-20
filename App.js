import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import MainMenu from './containers/MainMenu'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <MainMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(234, 34, 45)',
    justifyContent: 'center',
  },
});
