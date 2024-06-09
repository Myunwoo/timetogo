import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Signup: undefined;
  Login: undefined;
  Main: undefined;
  RouteInput: undefined;
  Info: undefined;
  DataVisualization: undefined;
};

export type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
