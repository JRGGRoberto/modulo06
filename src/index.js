import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ED',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default function App() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.welcome}>Welcome to React Native</Text>
      <Text style={styles.welcome}>Abaixo 1ss1 </Text>
      <Text style={styles.welcome}>Abaixo 1ss2 </Text>
      <Text style={styles.welcome}>Abaixo 1ss3 </Text>
      <Text style={styles.welcome}>Welcome to React Native</Text>
    </View>
  );
}
