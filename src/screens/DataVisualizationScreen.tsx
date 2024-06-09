import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
  query GetData {
    data {
      id
      value
    }
  }
`;

const DataVisualizationScreen = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Visualization Screen</Text>
      {data.data.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text>Value: {item.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  item: {
    marginBottom: 16,
  },
});

export default DataVisualizationScreen;
