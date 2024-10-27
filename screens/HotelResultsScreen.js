import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const HotelResultsScreen = ({ route, navigation }) => {
  const { currentLocation, destination, dateOfTravel } = route.params;

  const results = [
    { id: '1', name: 'Hotel 1', details: 'Details of Hotel 1' },
    { id: '2', name: 'Hotel 2', details: 'Details of Hotel 2' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.result}>
            <Text style={styles.resultName}>{item.name}</Text>
            <Text style={styles.resultDetails}>{item.details}</Text>
          </View>
        )}
      />
      <Button title="Back to Search" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  result: {
    padding: 8,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  resultName: {
    fontWeight: 'bold',
  },
  resultDetails: {
    color: 'gray',
  },
});

export default HotelResultsScreen;
