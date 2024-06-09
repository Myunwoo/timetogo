import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import client from './src/apollo/client';
import { AuthProvider } from './src/context/AuthContext';
import ProtectedRoute from './src/components/ProtectedRoute';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import RouteInputScreen from './src/screens/RouteInputScreen';
import InfoScreen from './src/screens/InfoScreen';
import DataVisualizationScreen from './src/screens/DataVisualizationScreen';
import { RootStackParamList } from './src/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <AuthProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Main">
                {() => (
                  <ProtectedRoute>
                    <MainScreen />
                  </ProtectedRoute>
                )}
              </Stack.Screen>
              <Stack.Screen name="RouteInput">
                {() => (
                  <ProtectedRoute>
                    <RouteInputScreen />
                  </ProtectedRoute>
                )}
              </Stack.Screen>
              <Stack.Screen name="Info">
                {() => (
                  <ProtectedRoute>
                    <InfoScreen />
                  </ProtectedRoute>
                )}
              </Stack.Screen>
              <Stack.Screen name="DataVisualization">
                {() => (
                  <ProtectedRoute>
                    <DataVisualizationScreen />
                  </ProtectedRoute>
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </AuthProvider>
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default App;
