import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';
import {ImageBackground} from 'react-native';
import { Path } from 'react-native-svg';
import Svg from 'react-native-svg';
export const icon = require("./Image/Logo.jpg");
export const iconSplash = require("./Image/splash.png");
export const iconSplash2 = require("./Image/splash2.png");
export default function App() {
  return (
    <View style={styles.customViewAll}>
      <View style={styles.customView1}>
      <Image
        style={styles.tinyLogo}
        source={icon}
      />
        <Text style={styles.container}>My Doc</Text>
      </View>
      <View style={styles.customView2}>
        <Svg
          width="100%"
          height="100%"
          viewBox="60 60 100 100"
>
        <Path
          fill="#474b9b" 
          fill-opacity="1" 
          d="M0,160L14.1,138.7C28.2,117,56,75,85,69.3C112.9,64,141,96,169,96C197.6,96,226,64,254,69.3C282.4,75,311,117,339,144C367.1,171,395,181,424,170.7C451.8,160,480,128,508,106.7C536.5,85,565,75,593,64C621.2,53,649,43,678,53.3C705.9,64,734,96,762,106.7C790.6,117,819,107,847,122.7C875.3,139,904,181,932,202.7C960,224,988,224,1016,213.3C1044.7,203,1073,181,1101,176C1129.4,171,1158,181,1186,197.3C1214.1,213,1242,235,1271,224C1298.8,213,1327,171,1355,144C1383.5,117,1412,107,1426,101.3L1440,96L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"
          />
        </Svg>
      </View>
      <StatusBar style="inverted" />
      <Image style={styles.customImage1}
          source={iconSplash}
        />
        <Image style={styles.customImage2}
          source={iconSplash2}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    color: '#fff',
    fontSize: 30,
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  customViewAll: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ef8565',
    alignItems: 'center',
    shadowColor: '#111',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  customView2: {
    height: '100%',
    width: '100%',
    flex: 4,
    alignItems: 'center',
    shadowColor: '#111',
    justifyContent: 'flex-end',
  },
  customView1: {
    height: '100%',
    width: '100%',
    flex: 3,
    backgroundColor: '#ef8565',
    alignItems: 'center',
    shadowColor: '#111',
    justifyContent: 'center',
  },
  customImage1: {
    height: 350,
    width:200,
    flex: 1,
    bottom: 0,
    left:0,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  customImage2: {
    height: 180,
    width:180,
    flex: 1,
    bottom: 100,
    right:0,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'flex-end',
  },
});
