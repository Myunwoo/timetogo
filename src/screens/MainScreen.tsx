import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

const MainScreen = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Screen</Text>
      <Button title="Go to Route Input" onPress={() => navigation.navigate('RouteInput')} />
      <Button title="Go to Info" onPress={() => navigation.navigate('Info')} />
      <Button title="Go to Data Visualization" onPress={() => navigation.navigate('DataVisualization')} />
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
});

export default MainScreen;
