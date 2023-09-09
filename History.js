// History.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';

const History = ({ route }) => {
  const { history } = route.params;

  return (
    <View style={styles.container}>
      <Text>History:</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
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

export default History;
