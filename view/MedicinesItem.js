import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image, View, TextInput, ImageBackground } from "react-native";
export const iconSplash = require("../Image/splash.png");
export const background = require("../Image/drug_background.jpg");

const MedicinesItem = () => {

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.backgroundCustom}>
        </View>
        <View style={{
            flex:1,
            justifyContent:'flex-start'
        }}>
        </View>


        <View style={{
            flex:1,
            position:'absolute',
            top:0, bottom: 0, left:0, right:0,}}>

        </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'#f3f4f8',
    flexDirection:'column',
    justifyContent:'flex-start'
  },
  backgroundCustom:{
    flex:1,
    backgroundColor:'#fff',
    borderBottomLeftRadius:100,
    justifyContent:'flex-start'
    
  },
});

export default MedicinesItem;