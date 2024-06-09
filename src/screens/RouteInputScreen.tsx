import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RouteInputScreen = () => {
  const [route, setRoute] = useState('');

  const handleRouteSubmit = () => {
    // GraphQL 요청을 통해 경로 데이터를 처리합니다.
    console.log('Route:', route);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Route Input Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Route"
        value={route}
        onChangeText={setRoute}
      />
      <Button title="Submit Route" onPress={handleRouteSubmit} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
  },
});

export default RouteInputScreen;
