import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Image } from 'react-native';
import TrainResultsScreen from './screens/TrainResultsScreen';
import FlightResultsScreen from './screens/FlightResultsScreen';
import BusResultsScreen from './screens/BusResultsScreen';
import HotelResultsScreen from './screens/HotelResultsScreen';
import BookingFormScreen from './screens/BookingFormScreen';
import HomeScreen from './screens/HomeScreen';
import WalletScreen from './screens/WalletScreen';
import TripsScreen from './screens/TripsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SupportScreen from './screens/SupportScreen';
import ServicesScreen from './screens/ServicesScreen'; // Import the ServicesScreen
import logo from './assets/lg.png';

// Define the stack and tab navigators
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

// Define the bottom tabs navigator
function BottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#00a88f',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' }, // All tab labels bold
        tabBarStyle: { backgroundColor: 'white' },
        tabBarIcon: ({ focused }) => {
          const icons = {
            Home: require('./assets/home.png'),
            Wallet: require('./assets/wallet.png'),
            Trips: require('./assets/trips.png'),
            Profile: require('./assets/profile.png'),
            Support: require('./assets/support.png'),
          };
          return <Image source={icons[route.name]} style={[styles.tabIcon, { tintColor: focused ? '#00a88f' : 'grey' }]} />;
        },
      })}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Wallet" component={WalletScreen} />
      <BottomTab.Screen name="Trips" component={TripsScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
      <BottomTab.Screen name="Support" component={SupportScreen} />
    </BottomTab.Navigator>
  );
}

// Define styles
const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 32, // Adjust size as needed
    height: 30, // Adjust size as needed
  },
  tabLabel: {
    fontSize: 14, // Adjust size if needed
    marginTop: 4,
    fontWeight: 'bold', // All tab labels bold
  },
  logo: {
    width: 30, // Adjust size as needed
    height: 30, // Adjust size as needed
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitlePart1: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold', // Makes the text bold
  },
  headerTitlePart2: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold', // Makes the text bold
  },
});

// Define the app component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabs">
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.headerTitlePart1}>Traintkt</Text>
              </View>
            ),
            headerTitleAlign: 'center', // Center the header title
            headerStyle: {
              backgroundColor: '#00a88f', // Header background color
            },
            headerShadowVisible: false, // Remove shadow
          }}
        />
        <Stack.Screen
          name="TrainResults"
          component={TrainResultsScreen}
          options={{ title: 'Train Results', headerTitleStyle: { fontWeight: 'bold' } }} // Bold text in header
        />
        <Stack.Screen
          name="FlightResults"
          component={FlightResultsScreen}
          options={{ title: 'Flight Results', headerTitleStyle: { fontWeight: 'bold' } }} // Bold text in header
        />
        <Stack.Screen
          name="BusResults"
          component={BusResultsScreen}
          options={{ title: 'Bus Results', headerTitleStyle: { fontWeight: 'bold' } }} // Bold text in header
        />
        <Stack.Screen
          name="HotelResults"
          component={HotelResultsScreen}
          options={{ title: 'Hotel Results', headerTitleStyle: { fontWeight: 'bold' } }} // Bold text in header
        />
        <Stack.Screen
          name="BookingForm"
          component={BookingFormScreen}
          options={{ title: 'Booking Form', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: 'bold' } }} // Bold text in header
        />
        <Stack.Screen
          name="Services"
          component={ServicesScreen} // Add the ServicesScreen here
          options={{ title: 'Services', headerTitleStyle: { fontWeight: 'bold' } }} // Bold text in header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
