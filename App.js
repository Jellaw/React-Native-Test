import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splash_screen from './view/splash_screen';
import ScreenFirst from './view/ScreenFirst';
import MedicinesItem from './view/MedicinesItem';
import ProductsList from './view/ProductsList';
import { createDrawerNavigator } from '@react-navigation/drawer';
export const iconAva = require("./Image/avatar.png");
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="First"
      screenOptions ={{headerShown: true, headerTitle:"",
      headerStyle:{
        backgroundColor:'#f4f5f9',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderBottomWidth: 0 // Just in case.
      }}}>
        {/* <Stack.Screen name="Splash" component={splash_screen} /> */}
        <Drawer.Screen name="First" component={ScreenFirst} />
        <Drawer.Screen name="ProductsList" component={ProductsList} />
        <Drawer.Screen name="MedicinesItem" component={MedicinesItem} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;