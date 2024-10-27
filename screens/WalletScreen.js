// screens/WalletScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';

function WalletScreen() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    // Fetch balance from server
    fetch('http://192.168.1.1:3000/wallet/balance')
      .then(response => response.json())
      .then(data => setBalance(data.balance))
      .catch(error => console.error('Error fetching balance:', error));
  }, []);

  const handleAddFunds = () => {
    const amountToAdd = parseFloat(amount);
    if (isNaN(amountToAdd) || amountToAdd <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid amount.');
      return;
    }

    // Post amount to server
    fetch('http://192.168.1.1:3000/wallet/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amountToAdd }),
    })
      .then(response => response.json())
      .then(data => {
        setBalance(data.balance);
        setAmount(''); // Clear the input field
      })
      .catch(error => console.error('Error adding funds:', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.balance}>Wallet Balance: ${balance.toFixed(2)}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={text => setAmount(text)}
      />
      <Button title="Add Funds" onPress={handleAddFunds} color="#00a88f" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 44,
    marginTop: 16,
    backgroundColor: '#f5f5f5',
  },
  balance: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#00a88f',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
});

export default WalletScreen;
