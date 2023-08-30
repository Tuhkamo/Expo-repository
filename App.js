import { StatusBar } from 'expo-status-bar';
import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {
  const [guessNumber, setGuessNumber] = useState('');
  const [numberOfGuesses, setNumberOfGuesses] = useState(1);
  const [guessText, setGuessText] = useState('Guess a number between 1-100');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function reset() {
    setRandomNumber(generateRandomNumber());
    setNumberOfGuesses(1);
    setGuessNumber('');
    setGuessText('Guess a number between 1-100');
  }

  function buttonPressed() {
    const guess = parseInt(guessNumber);
    setNumberOfGuesses((numberOfGuesses + 1));

    if (guess === randomNumber) {
      Alert.alert(`You guessed the number in ${numberOfGuesses} guesses. Congratulations!`);
    } else if (guess > randomNumber) {
      setGuessText(`Your guess ${guess} was too high`);
    } else if (guess < randomNumber) {
      setGuessText(`Your guess ${guess} was too low`);
    }
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.guessText}>{guessText}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setGuessNumber(text)}
        value={guessNumber}
        keyboardType="numeric"
      />
      <Button onPress={buttonPressed} title="Make Guess" />
      <Button onPress={reset} title="Reset" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 10,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  guessText: {
    marginTop: 50,
    fontSize: 18,
    textAlign: 'center',
  },
});