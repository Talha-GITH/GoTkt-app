import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TrainSearchScreen = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [dateOfTravel, setDateOfTravel] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSearch = () => {
    if (!currentLocation || !destination) {
      alert('Please fill in both current location and destination');
      return;
    }
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

  const setTatkalDate = (daysFromToday) => {
    const tatkalDate = new Date();
    tatkalDate.setDate(tatkalDate.getDate() + daysFromToday);
    setDateOfTravel(tatkalDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Enter Source Name</Text>
      <TextInput
        style={styles.input}
        value={currentLocation}
        onChangeText={setCurrentLocation}
        placeholder="Enter current location"
      />
      <Text style={styles.label}>To</Text>
      <TextInput
        style={styles.input}
        value={destination}
        onChangeText={setDestination}
        placeholder="Enter destination"
      />
      <Text style={styles.label}>Departure</Text>
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
      <View style={styles.tatkalContainer}>
        <TouchableOpacity onPress={() => setTatkalDate(0)} style={styles.tatkalButton}>
          <Text style={styles.tatkalText}>Tatkal open</Text>
          <Text style={styles.tatkalSubText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTatkalDate(1)} style={styles.tatkalButton}>
          <Text style={styles.tatkalText}>Tatkal open</Text>
          <Text style={styles.tatkalSubText}>Tomorrow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTatkalDate(2)} style={styles.tatkalButton}>
          <Text style={styles.tatkalText}>Tatkal open</Text>
          <Text style={styles.tatkalSubText}>Day After Tomorrow</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Text style={styles.buttonText}>Search Trains</Text>
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
    color: 'white',
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
  tatkalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tatkalButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  tatkalText: {
    fontWeight: 'bold',
    color: '#00a88f',
  },
  tatkalSubText: {
    color: '#00a88f',
  },
});

export default TrainSearchScreen;
