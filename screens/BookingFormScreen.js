import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function BookingFormScreen({ route }) {
  const { id } = route.params;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    // Handle booking logic here
    alert(`Ticket booked for ${name}, age ${age}, on train ${id}`);
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <Button title="Book Ticket" onPress={handleSubmit} />
    </View>
  );
}
