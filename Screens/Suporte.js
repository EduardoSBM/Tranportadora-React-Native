import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Suporte({ navigation }) {
  return (

    <View style={styles.container}>
      <Text>  reclamções, problemas com demanda e etc </Text>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    display: 'flex',
  }
});
