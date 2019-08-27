import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './containers/HomeScreen'
import PokemonScreen from './containers/PokemonScreen'

class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Pokemon: {
    screen: PokemonScreen
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default createAppContainer(AppNavigator);
