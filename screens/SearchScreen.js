// HomeScreen.js
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TopTabs from './TopTabs';
import CScreen from './CScreen';
import ServicesScreen from './ServicesScreen';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.topTabsContainer}>
        <TopTabs />
      </View>
      <CScreen />
      <ServicesScreen />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 16, // Add padding to ensure bottom content is visible
  },
  topTabsContainer: {
    height: 400, // Adjust height as needed
  },
});

export default HomeScreen;
