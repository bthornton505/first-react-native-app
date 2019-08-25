import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  return(
     <View style={props.style.headerContainer}>
       {
         props.setFont ? (
           <Text style={props.style.header}>POKEDEX</Text>
         ) : null
       }
     </View>
  )
}

export default Header;
