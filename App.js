import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import AuthContextProvider, { AuthContext } from './store/auth-context';

import MainScreen from './MainScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignipScreen';
import Colors from './constants/Colors';
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
      />

    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={MainScreen}
      />
    </Stack.Navigator>
  );
}
function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
  
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>

  );
}

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Navigation /> 
      </AuthContextProvider>
    </>
  );
}
