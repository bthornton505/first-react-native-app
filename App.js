import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Font from 'expo-font';

import Header from './components/Header'
import MainMenu from './containers/MainMenu'

export default class App extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'press-start-2p': require('./assets/fonts/PressStart2P-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  };

  handlePress = () => {
    alert('151 Awesome Pokemon!')
  }

  render() {
    return (
      <View style={styles.appContainer}>

       {/* Header Containter */}
        <View style={styles.headerContainer}>
          {
            this.state.fontLoaded ? (
              <Text style={styles.header}>POKEDEX</Text>
            ) : null
          }
        </View>

        {/* Pikachu Containter */}
        <View style={styles.center}>
          <Image style={styles.mainImg} source={require('./images/derp-pikachu-v2.png')} />
        </View>

        {/* Main Menu Containter */}
        <View style={styles.mainMenuContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.handlePress}>
              {
                this.state.fontLoaded ? (
                  <Text style={styles.button}>
                    Pokemon
                  </Text>
                ) : null
              }
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.handlePress}>
              {
                this.state.fontLoaded ? (
                  <Text style={styles.button}>
                    Items
                  </Text>
                ) : null
              }
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.handlePress}>
              {
                this.state.fontLoaded ? (
                  <Text style={styles.button}>
                    Moves
                  </Text>
                ) : null
              }
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  headerContainer: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(234, 34, 45)',
    // backgroundColor: 'black',
  },
  header: {
    fontFamily: 'press-start-2p',
    color: 'white',
    fontSize: 45,
    paddingTop: 32,
    top: 10
  },
  center: {
    height: '27%',
    alignItems: 'center',
    backgroundColor: 'rgb(234, 34, 45)',
  },
  mainImg: {
    width: 700,
    height: 300,
    position: 'relative',
    bottom: 30,
    shadowOpacity: 1,
    shadowRadius: 23,
  },
  mainMenuContainer: {
    height: '58%',
    backgroundColor: 'rgb(234, 34, 45)',
    // backgroundColor: 'black',
  },
  buttonContainer: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    padding: 15,
    backgroundColor: '#FFF',
    borderWidth: 3,
    borderRadius: 40,
  },
  button: {
    fontFamily: 'press-start-2p',
    color: 'black',
    textAlign: 'center',
    padding: 12,
  },
});
