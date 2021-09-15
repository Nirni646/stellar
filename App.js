import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRootName = 'home' screenOptions={{
        headerShown : false,
      }}>
        <stack.Screen name='home' component={HomeScreen} />
        <stack.Screen name='DailyPic' component={DailyPic} />
        <stack.Screen name='SpaceCrafts' component={SpaceCrafts} />
        <stack.Screen name='StarMap' component={StarMap} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
