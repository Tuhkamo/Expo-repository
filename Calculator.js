// Calculator.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

const Calculator = ({ navigation }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('Result: ');
  const [history, setHistory] = useState([]);

  const add = () => {
    const operationResult = parseFloat(text1) + parseFloat(text2);
    const operation = `${text1} + ${text2} = ${operationResult}`;
    setResult('Result: ' + operationResult);
    setHistory([...history, operation]);
  };

  const subtract = () => {
    const operationResult = parseFloat(text1) - parseFloat(text2);
    const operation = `${text1} - ${text2} = ${operationResult}`;
    setResult('Result: ' + operationResult);
    setHistory([...history, operation]);
  };

  const showHistory = () => {
    navigation.navigate('History', { history });
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
        <View style={styles.space} />
        <Button onPress={subtract} title="-" />
        <View style={styles.space} />
        <Button onPress={showHistory} title="History" />
      </View>
    </View>
  );
};

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
      borderWidth: 1,
    },
    buttonGroup: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    space: {
      width: 20,
      height: 20,
    },
  });

export default Calculator;