import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image, View, TextInput, ImageBackground } from "react-native";


const ProductsList = () => {

  return (
    <SafeAreaView style={styles.container}>
        <View></View>
      
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

export default ProductsList;