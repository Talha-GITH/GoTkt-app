import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const HotelSearchScreen = ({ navigation }) => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [showCheckInDatePicker, setShowCheckInDatePicker] = useState(false);
  const [showCheckOutDatePicker, setShowCheckOutDatePicker] = useState(false);

  const handleSearch = () => {
    if (!location) {
      alert('Please enter a location');
      return;
    }
    navigation.navigate('HotelResults', {
      location,
      checkInDate,
      checkOutDate
    });
  };

  const onCheckInDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || checkInDate;
    setShowCheckInDatePicker(Platform.OS === 'ios');
    setCheckInDate(currentDate);
  };

  const onCheckOutDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || checkOutDate;
    setShowCheckOutDatePicker(Platform.OS === 'ios');
    setCheckOutDate(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Enter location"
      />
      <Text style={styles.label}>Check-In Date</Text>
      <TouchableOpacity onPress={() => setShowCheckInDatePicker(true)} style={styles.dateInput}>
        <Text>{checkInDate.toDateString()}</Text>
      </TouchableOpacity>
      {showCheckInDatePicker && (
        <DateTimePicker
          value={checkInDate}
          mode="date"
          display="default"
          onChange={onCheckInDateChange}
        />
      )}
      <Text style={styles.label}>Check-Out Date</Text>
      <TouchableOpacity onPress={() => setShowCheckOutDatePicker(true)} style={styles.dateInput}>
        <Text>{checkOutDate.toDateString()}</Text>
      </TouchableOpacity>
      {showCheckOutDatePicker && (
        <DateTimePicker
          value={checkOutDate}
          mode="date"
          display="default"
          onChange={onCheckOutDateChange}
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

export default HotelSearchScreen;
