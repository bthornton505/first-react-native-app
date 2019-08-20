import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'rgb(234, 34, 45)',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
