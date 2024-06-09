import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const InfoScreen = () => {
  const [loading, setLoading] = useState(true);
  const [infoData, setInfoData] = useState<{ id: string; title: string; description: string; }[]>([]);

  useEffect(() => {
    const fetchInfoData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'info'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as { id: string; title: string; description: string; }[];
        setInfoData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching info data:', error);
        setLoading(false);
      }
    };

    fetchInfoData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info Screen</Text>
      {infoData.map(item => (
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
