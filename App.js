import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('Shopping List');
  const [history, setHistory] = useState(['']);

  const add = () => {
    const operation = `${text1}`;
    setHistory([...history, operation]);
  };

  const clear = () => {
    setHistory([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText1(text)}
        value={text1}
        keyboardType="numeric"
      />
      <View style={styles.buttonGroup}>
        <Button onPress={add} title="Add" />
        <View style={styles.space}/>
        <Button onPress={clear} title="Clear" />
      </View>
      <Text style={styles.blue}>{text2}</Text>
        <FlatList 
          data={history}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonGroup: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  space: {
    width: 20,
    height: 20,
  },
  blue: {
    color: 'blue',
    fontWeight: 'bold',
  }
});