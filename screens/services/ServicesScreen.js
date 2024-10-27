import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
      <Text style={styles.text}>Service 1</Text>
      <Text style={styles.text}>Service 2</Text>
      <Text style={styles.text}>Service 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ServicesScreen;
