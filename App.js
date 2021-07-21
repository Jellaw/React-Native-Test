import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splash_screen from './view/splash_screen';
import ScreenFirst from './view/ScreenFirst';
import Medicines from './view/Medicines';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Medicines"
      screenOptions ={{headerShown: false}}>
        <Stack.Screen name="Splash" component={splash_screen} />
        <Stack.Screen name="First" component={ScreenFirst} />
        <Stack.Screen name="Medicines" component={Medicines} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;