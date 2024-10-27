import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const SeatAvailabilityScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Seat Availability Screen</Text>
      {/* Add your seat availability components here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default SeatAvailabilityScreen;
