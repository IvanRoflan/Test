import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from './screens/Screens';
import { StartScreen } from './screens/StartScreen';
import { Results } from './screens/Results';

const Stack = createStackNavigator();
enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      headerMode="none"
      detachInactiveScreens
      >
        <Stack.Screen name="Start Screen" component={StartScreen} />
        <Stack.Screen name="Q1" component={Screens.Q1} />
        <Stack.Screen name="Q2" component={Screens.Q2} />
        <Stack.Screen name="Q3" component={Screens.Q3} />
        <Stack.Screen name="Q4" component={Screens.Q4} />
        <Stack.Screen name="Q5" component={Screens.Q5} />
        <Stack.Screen name="Q6" component={Screens.Q6} />
        <Stack.Screen name="Q7" component={Screens.Q7} />
        <Stack.Screen name="Q8" component={Screens.Q8} />
        <Stack.Screen name="Q9" component={Screens.Q9} />
        <Stack.Screen name="Q10" component={Screens.Q10} />
        <Stack.Screen name="Q11" component={Screens.Q11} />
        <Stack.Screen name="Q12" component={Screens.Q12} />
        <Stack.Screen name="Q13" component={Screens.Q13} />
        <Stack.Screen name="Q14" component={Screens.Q14} />
        <Stack.Screen name="Q15" component={Screens.Q15} />
        <Stack.Screen name="Q16" component={Screens.Q16} />
        <Stack.Screen name="Q17" component={Screens.Q17} />
        <Stack.Screen name="Q18" component={Screens.Q18} />
        <Stack.Screen name="Q19" component={Screens.Q19} />
        <Stack.Screen name="Q20" component={Screens.Q20} />
        <Stack.Screen name="Q21" component={Screens.Q21} />
        <Stack.Screen name="Q22" component={Screens.Q22} />
        <Stack.Screen name="Q23" component={Screens.Q23} />
        <Stack.Screen name="Q24" component={Screens.Q24} />
        <Stack.Screen name="Q25" component={Screens.Q25} />
        <Stack.Screen name="Q26" component={Screens.Q26} />
        <Stack.Screen name="Q27" component={Screens.Q27} />
        <Stack.Screen name="Q28" component={Screens.Q28} />
        <Stack.Screen name="Q29" component={Screens.Q29} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
