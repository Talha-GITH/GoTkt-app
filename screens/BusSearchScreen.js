import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BusSearchScreen = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [dateOfTravel, setDateOfTravel] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSearch = () => {
    if (!currentLocation || !destination) {
      alert('Please fill in both current location and destination');
      return;
    }
    // Navigate to TrainResultsScreen with search parameters
    navigation.navigate('TrainResults', {
      currentLocation,
      destination,
      dateOfTravel
    });
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfTravel;
    setShowDatePicker(Platform.OS === 'ios');
    setDateOfTravel(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Current Location</Text>
      <TextInput
        style={styles.input}
        value={currentLocation}
        onChangeText={setCurrentLocation}
        placeholder="Enter current location"
      />
      <Text style={styles.label}>Destination</Text>
      <TextInput
        style={styles.input}
        value={destination}
        onChangeText={setDestination}
        placeholder="Enter destination"
      />
      <Text style={styles.label}>Date of Travel</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
        <Text>{dateOfTravel.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dateOfTravel}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Text style={styles.buttonText}>Bus Search</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#00a88f',
  },
  label: {
    marginBottom: 8,
    fontWeight: 'bold',
    color: 'white', // Optional: To ensure labels are visible on the background
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  dateInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 8,
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BusSearchScreen;
