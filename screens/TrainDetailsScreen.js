// screens/TrainDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TrainDetailsScreen({ route }) {
  const { id } = route.params;
  // Fetch or use the train details based on `id`
  return (
    <View style={styles.container}>
      <Text>Details for Train {id}</Text>
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
