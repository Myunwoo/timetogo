import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import client from './src/apollo/client';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default App;
