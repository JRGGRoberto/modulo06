import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ED',
  },
  welcome: {
    fontSize: 20,
    color: '#FFF',
    textShadowColor: '#FF9900',
    textShadowRadius: 10,
    textAlign: 'center',
    margin: 10,
  },
});

console.tron.log('Hey');
console.tron.warn('HEY!!!');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native</Text>
      <Text style={styles.welcome}>Abaixo</Text>
    </View>
  );
}
