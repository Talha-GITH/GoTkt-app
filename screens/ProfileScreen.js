// ProfileScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Simulated function to get user data, replace with actual data fetching logic
const fetchUserData = async () => {
  try {
    // Fetch user data from AsyncStorage or API
    const userData = await AsyncStorage.getItem('user');
    return JSON.parse(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      const data = await fetchUserData();
      setUser(data);
    };
    loadUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user'); // Clear user data from storage
      navigation.navigate('Login'); // Navigate to login screen or any other screen
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: user.profilePicture }} // User profile picture URL
          style={styles.profilePicture}
        />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>
      <View style={styles.settingsContainer}>
        <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
        <Button title="Account Settings" onPress={() => navigation.navigate('AccountSettings')} />
        <Button title="Privacy Policy" onPress={() => navigation.navigate('PrivacyPolicy')} />
        <Button title="Terms of Service" onPress={() => navigation.navigate('TermsOfService')} />
        <Button title="Logout" onPress={handleLogout} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default ProfileScreen;