import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';

const API_KEY = '1';

export default function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/${API_KEY}/search.php?s=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecipes(data.meals);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recipe Search</Text>
      <TextInput
        placeholder="Enter recipe name..."
        style={styles.input}
        onChangeText={(text) => setQuery(text)}
        value={query}
      />
      <Button title="Search" onPress={searchRecipes} />
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <Card style={styles.recipeContainer}>
            <Card.Cover source={{ uri: `${item.strMealThumb}/preview` }} resizeMode="contain" style={styles.image} />
            <Card.Content>
              <Title>{item.strMeal}</Title>
            </Card.Content>
          </Card>
        )}
      />
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
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  recipeContainer: {
    marginVertical: 8,
  },
  image: {
    aspectRatio: 1,
  },
});