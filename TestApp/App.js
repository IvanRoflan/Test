import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Question } from './screens/Screens';
import { StartScreen } from './screens/StartScreen';
import { Results } from './screens/Results';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      headerMode="none">
        <Stack.Screen name="Start Screen" component={StartScreen} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
