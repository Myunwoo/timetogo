import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const GET_INFOS = gql`
  query GetInfos {
    infos {
      id
      title
      description
    }
  }
`;

const InfoScreen = () => {
  const { loading, error, data } = useQuery(GET_INFOS);

  if (loading) return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );

  if (error) return (
    <View style={styles.container}>
      <Text>Error: {error.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info Screen</Text>
      {data.infos.map((item: { id: string; title: string; description: string }) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text>{item.description}</Text>
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
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InfoScreen;
