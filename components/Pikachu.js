import React from 'react';
import { Text, View, Image } from 'react-native';

const Pikachu = (props) => {
  return(
    <View style={props.style.center}>
      <Image style={props.style.mainImg} source={require('../images/derp-pikachu-v2.png')} />
    </View>
  )
}

export default Pikachu;
