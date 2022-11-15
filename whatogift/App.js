import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator, AccountStack } from './src/navigation';

const [isLogin, setIsLogin] = useState(false);

export default function App() {
  return (
    <NavigationContainer>
      {
        isLogin ? (<TabsNavigator />) : (<AccountStack />)
      }
    </NavigationContainer>
  );
}