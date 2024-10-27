import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const SearchResultsScreen = ({ route, navigation }) => {
  const { results, type } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type} Search Results</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.result}>
            <Text style={styles.resultName}>{item.name}</Text>
            <Text style={styles.resultDetails}>{item.details}</Text>
          </View>
        )}
        contentContainerStyle={styles.resultList}
        accessibilityLabel="Search Results"
        accessibilityHint="List of search results"
      />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  result: {
    padding: 8,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  resultName: {
    fontWeight: 'bold',
  },
  resultDetails: {
    color: 'gray',
  },
  resultList: {
    paddingBottom: 16,
  },
  backButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: 'green',
    borderRadius: 4,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SearchResultsScreen;
