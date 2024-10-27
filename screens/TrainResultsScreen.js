import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const TrainResultsScreen = ({ route, navigation }) => {
  const { currentLocation, destination, dateOfTravel } = route.params;

  // Example results
  const results = [
    { id: '1', name: 'Train 1', details: 'Details of Train 1' },
    { id: '2', name: 'Train 2', details: 'Details of Train 2' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Results for {destination} from {currentLocation} on {dateOfTravel.toDateString()}</Text>
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
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
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

export default TrainResultsScreen;