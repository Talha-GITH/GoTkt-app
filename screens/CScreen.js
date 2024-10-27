// CScreen.js
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const CScreen = () => {
  return (
    <View style={styles.servicesContainer}>
      <Text style={styles.sectionHeader}>CScreen</Text>
      <ScrollView style={styles.servicesScrollView}>
        <Text style={styles.serviceItem}>CScreen Item 1</Text>
        <Text style={styles.serviceItem}>CScreen Item 2</Text>
        <Text style={styles.serviceItem}>CScreen Item 3</Text>
        {/* Add more items as needed */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  servicesContainer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  servicesScrollView: {
    flexGrow: 1,
  },
  serviceItem: {
    fontSize: 16,
    marginVertical: 8,
  },
});

export default CScreen;
