import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const IRCTCFoodScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>IRCTC Food Screen</Text>
      {/* Add your IRCTC food components here */}
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

export default IRCTCFoodScreen;
