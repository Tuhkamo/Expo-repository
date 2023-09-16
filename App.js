import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

const API_KEY = 'xcXDFrAh7TPb9jfnTN9Q4KcvfQO1zNuC';
const API_URL = `https://api.apilayer.com/exchangerates_data/latest?apikey=${API_KEY}`;

export default function App() {
  const [amount, setAmount] = useState('');
  const [euros, setEuros] = useState('');
  const [currencyCode, setCurrencyCode] = useState('USD');
  const [error, setError] = useState('');
  const [currencyList, setCurrencyList] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyList(data.rates);
      })
      .catch((error) => {
        console.error('Error fetching exchange rates:', error);
      });
  }, []);

  const convertToEuros = () => {
    try {
      setError('');
      if (!currencyCode || !amount) {
        throw new Error('Please enter a currency code and an amount');
      }
      const rate = currencyList[currencyCode];
      const convertedEuros = (parseFloat(amount) / rate).toFixed(2);
      setEuros(convertedEuros);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Currency to Euros Converter</Text>
        <TextInput
          placeholder="Enter amount"
          style={styles.input}
          onChangeText={(text) => setAmount(text)}
          value={amount}
          keyboardType="numeric"
        />
        <Picker
          selectedValue={currencyCode}
          onValueChange={(itemValue) => setCurrencyCode(itemValue)}
          style={styles.picker}
        >
          {Object.keys(currencyList).map((code) => (
            <Picker.Item key={code} label={code} value={code} />
          ))}
        </Picker>
        <Button title="Convert" onPress={convertToEuros} />
        {euros !== '' && <Text style={styles.result}>{euros} €</Text>}
        {error !== '' && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  picker: {
    height: 40,
    marginBottom: 16,
  },
  result: {
    fontSize: 18,
    marginTop: 16,
  },
  error: {
    color: 'red',
    marginTop: 16,
  },
});