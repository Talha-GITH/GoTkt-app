// TopTabs.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet, Image } from 'react-native';
import TrainSearchScreen from './TrainSearchScreen';
import FlightSearchScreen from './FlightSearchScreen';
import BusSearchScreen from './BusSearchScreen';
import HotelSearchScreen from './HotelSearchScreen';

const TopTab = createMaterialTopTabNavigator();

const TabIcon = ({ icon, label, focused }) => (
  <View style={styles.tabIconContainer}>
    <Image source={icon} style={[styles.tabIcon, { tintColor: focused ? '#00a88f' : 'gray' }]} />
    <Text style={[styles.tabLabel, { color: focused ? '#00a88f' : 'black' }]}>
      {label}
    </Text>
  </View>
);

const TopTabs = () => {
  return (
    <TopTab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarIndicatorStyle: { backgroundColor: 'green' },
        tabBarLabel: ({ focused }) => {
          const icons = {
            Trains: require('../assets/train.png'),
            Flights: require('../assets/flight.png'),
            Bus: require('../assets/bus.png'),
            Hotels: require('../assets/hotel.png'),
          };
          return <TabIcon icon={icons[route.name]} label={route.name} focused={focused} />;
        },
      })}
    >
      <TopTab.Screen name="Trains" component={TrainSearchScreen} />
      <TopTab.Screen name="Flights" component={FlightSearchScreen} />
      <TopTab.Screen name="Bus" component={BusSearchScreen} />
      <TopTab.Screen name="Hotels" component={HotelSearchScreen} />
    </TopTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 52, // Adjust size as needed
    height: 32, // Adjust size as needed
  },
  tabLabel: {
    fontSize: 14, // Adjust size if needed
    marginTop: 4,
    fontWeight: 'bold', // All tab labels bold
  },
});

export default TopTabs;
