import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';

// Replace these with actual logo images or icons
const serviceLogos = {
  pnrStatus: require('../assets/pnrStatusLogo.png'),
  runningStatus: require('../assets/runningStatusLogo.png'),
  seatAvailability: require('../assets/seatAvailabilityLogo.png'),
  liveStation: require('../assets/liveStationLogo.png'),
  irctcFood: require('../assets/irctcFoodLogo.png'),
};

const ServicesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionHeading}>Travel Status</Text>
      <View style={styles.servicesWrapper}>
        <View style={styles.serviceContainer}>
          <Image source={serviceLogos.pnrStatus} style={styles.logo} />
          <Text style={styles.serviceTitle}>PNR Status</Text>
        </View>
        <View style={styles.serviceContainer}>
          <Image source={serviceLogos.runningStatus} style={styles.logo} />
          <Text style={styles.serviceTitle}>Running Status</Text>
        </View>
        <View style={styles.serviceContainer}>
          <Image source={serviceLogos.seatAvailability} style={styles.logo} />
          <Text style={styles.serviceTitle}>Seat Availability</Text>
        </View>
        <View style={styles.serviceContainer}>
          <Image source={serviceLogos.liveStation} style={styles.logo} />
          <Text style={styles.serviceTitle}>Live Station</Text>
        </View>
        <View style={styles.serviceContainer}>
          <Image source={serviceLogos.irctcFood} style={styles.logo} />
          <Text style={styles.serviceTitle}>IRCTC Food</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionHeading: {
    fontSize: 19, // Adjust size as needed
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  servicesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
  },
  serviceContainer: {
    width: '20%', // Adjust this value as needed
    flexDirection: 'column', // Stack logo and text vertically
    alignItems: 'center', // Center items horizontally
    marginBottom: 15, // Space between items
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 30, // Adjust size as needed
    height: 30, // Adjust size as needed
    marginBottom: 1, // Space between logo and text
  },
  serviceTitle: {
    fontSize: 10, // Adjust size as needed
    fontWeight: 'bold',
  },
});

export default ServicesScreen;
