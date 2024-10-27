import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const FlightSearchScreen = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [dateOfTravel, setDateOfTravel] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tripType, setTripType] = useState('oneway');
  const [returnDate, setReturnDate] = useState(new Date());
  const [selectedBenefits, setSelectedBenefits] = useState([]);

  const handleSearch = () => {
    if (!currentLocation || !destination) {
      alert('Please fill in both current location and destination');
      return;
    }
    navigation.navigate('FlightResults', {
      currentLocation,
      destination,
      dateOfTravel,
      tripType,
      returnDate: tripType === 'roundtrip' ? returnDate : null,
      selectedBenefits
    });
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfTravel;
    setShowDatePicker(Platform.OS === 'ios');
    setDateOfTravel(currentDate);
  };

  const onReturnDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || returnDate;
    setShowDatePicker(Platform.OS === 'ios');
    setReturnDate(currentDate);
  };

  const toggleBenefit = (benefit) => {
    setSelectedBenefits((prevSelectedBenefits) =>
      prevSelectedBenefits.includes(benefit)
        ? prevSelectedBenefits.filter((b) => b !== benefit)
        : [...prevSelectedBenefits, benefit]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Domestic and International Flights</Text>
      
      <View style={styles.tripTypeContainer}>
        <TouchableOpacity onPress={() => setTripType('oneway')} style={[styles.tripTypeButton, tripType === 'oneway' && styles.selectedTripType]}>
          <Text style={styles.tripTypeText}>One-way</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTripType('roundtrip')} style={[styles.tripTypeButton, tripType === 'roundtrip' && styles.selectedTripType]}>
          <Text style={styles.tripTypeText}>Round-trip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTripType('multicity')} style={[styles.tripTypeButton, tripType === 'multicity' && styles.selectedTripType]}>
          <Text style={styles.tripTypeText}>Multi-city</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.label}>From</Text>
      <TextInput
        style={styles.input}
        value={currentLocation}
        onChangeText={setCurrentLocation}
        placeholder="Enter city or airport"
      />
      <Text style={styles.label}>To</Text>
      <TextInput
        style={styles.input}
        value={destination}
        onChangeText={setDestination}
        placeholder="Enter city or airport"
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

      {tripType === 'roundtrip' && (
        <>
          <Text style={styles.label}>Return</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
            <Text>{returnDate.toDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={returnDate}
              mode="date"
              display="default"
              onChange={onReturnDateChange}
            />
          )}
        </>
      )}
      
      <Text style={styles.label}>Travellers & Class</Text>
      <TextInput
        style={styles.input}
        value="1 Adult, Economy"
        editable={false}
      />
      
      <Text style={styles.label}>More Benefits</Text>
      <View style={styles.benefitsContainer}>
        <TouchableOpacity onPress={() => toggleBenefit('student')} style={styles.benefitOption}>
          <Text style={styles.benefitText}>●</Text>
          <Text style={styles.benefitSubText}>ST - Student, Extra Baggage</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleBenefit('seniorCitizen')} style={styles.benefitOption}>
          <Text style={styles.benefitText}>●</Text>
          <Text style={styles.benefitSubText}>SC - Senior Citizen, Exclusive Discounts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleBenefit('armedForces')} style={styles.benefitOption}>
          <Text style={styles.benefitText}>●</Text>
          <Text style={styles.benefitSubText}>AF - Armed Forces, Exclusive Discounts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleBenefit('doctorsNurses')} style={styles.benefitOption}>
          <Text style={styles.benefitText}>●</Text>
          <Text style={styles.benefitSubText}>D - Doctors & Nurses, Exclusive Discount</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Text style={styles.buttonText}>Search Flights</Text>
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  tripTypeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tripTypeButton: {
    flex: 1,
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 4,
  },
  selectedTripType: {
    backgroundColor: '#000',
  },
  tripTypeText: {
    color: '#000',
  },
  selectedTripTypeText: {
    color: '#fff',
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
  benefitsContainer: {
    marginBottom: 16,
  },
  benefitOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  benefitText: {
    fontWeight: 'bold',
    color: 'white',
    marginRight: 8,
  },
  benefitSubText: {
    color: 'white',
  },
});

export default FlightSearchScreen;
