// screens/TrainListScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TrainListScreen({ route, navigation }) {
  const { source, destination } = route.params || {};

  if (!source || !destination) {
    return (
      <View style={styles.container}>
        <Text>Error: Source or destination is missing.</Text>
      </View>
    );
  }

  // Dummy train data
  const trains = [
    { id: 1, name: 'Train 1', source, destination, time: '10:00 AM' },
    { id: 2, name: 'Train 2', source, destination, time: '12:00 PM' },
  ];

  return (
    <View style={styles.container}>
      <Text>Trains from {source} to {destination}</Text>
      {trains.map(train => (
        <Button
          key={train.id}
          title={`${train.name} - ${train.time}`}
          onPress={() => navigation.navigate('TrainDetails', { id: train.id })}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
