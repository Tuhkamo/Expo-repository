import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('');

  const add = () => {
    setResult('Result: ' + (parseFloat(text1) + parseFloat(text2)));
  };

  const subtract = () => {
    setResult('Result: ' + (parseFloat(text1) - parseFloat(text2)));
  };

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText1(text)}
        value={text1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText2(text)}
        value={text2}
        keyboardType="numeric"
      />
      <View style={styles.buttonGroup}>
        <Button onPress={add} title="+" />
        <View style={styles.space}/>
        <Button onPress={subtract} title="-" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  space: {
    width: 20,
    height: 20,
  }
});