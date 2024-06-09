import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenNavigationProp } from '../types/navigation';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigation = useNavigation<AuthScreenNavigationProp>();

  useEffect(() => {
    if (!loading && !user) {
      navigation.navigate('Login');
    }
  }, [loading, user, navigation]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return null; // 로그인 화면으로 리다이렉트
  }

  return React.cloneElement(children, { navigation });
};

export default ProtectedRoute;
