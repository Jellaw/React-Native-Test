import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableHighlight, Image, View } from "react-native";
export const drug1 = require("../Image/drug1.png");

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
            flexDirection:'column',
            top:0, bottom: 0, left:0, right:0,}}>
              <View style={styles.backgroundProduct}>
                <View style={{
                  flex:4,
                  alignItems:'flex-end',
                  justifyContent:'center'
                }}>
                  <Image
                    source={drug1}
                    style = {{width:100,height:'100%',alignItems:'center',marginVertical:8,position:'absolute',bottom:-55}}
                        resizeMode='center'
                  ></Image>
                </View>
                <View style={{
                  flex:6,
                  alignItems:'center',
                  justifyContent:'center'
                }}>
                  <View style={{paddingLeft:20,width:'90%',marginTop:50}}>
                    <Text style={styles.description}>MEDINE NAME</Text>
                    <Text style={{
                      fontSize:17,
                      color:'#3c3363',
                      fontWeight:'bold'
                    }}>Plant-Derived Hemi Squal 25ml</Text>
                  </View>
                  <View style={{paddingLeft:20,width:'90%',marginTop:20}}>
                    <Text style={styles.description}>QUANTITY</Text>
                    <Text style={{
                      fontSize:17,
                      color:'#3c3363',
                      fontWeight:'bold'
                    }}>30mg</Text>
                  </View>
                  <View style={{paddingLeft:20,width:'90%',marginTop:20}}>
                    <Text style={styles.description}>PRICE</Text>
                    <Text style={{
                      fontSize:17,
                      color:'#3c3363',
                      fontWeight:'bold'
                    }}>$80.00</Text>
                  </View>
                </View>
              </View>
              <View style={styles.infoProductView}>
                <View style={{paddingLeft:20,width:'90%',marginTop:20}}>
                    <Text style={styles.description}>NOTE</Text>
                    <Text style={styles.body}>4 Drops every 4-6 Hours Doily. No more than 20 Drops.</Text>
                  </View>
                  <View style={{paddingLeft:20,width:'90%',marginTop:20}}>
                    <Text style={styles.description}>DESCRIPTION</Text>
                    <Text style={styles.body}>This oili is one of my raost boloved must-haves. After searching for an inexpensive rosehip oil (I personally don't believe in paying over S20 for a single oil). | finally decided to try this one and I'm so glad I did. It's great for moisturizing and nourishing my skin, yet it still feels lightweight.</Text>
                  </View>
                  <TouchableHighlight
                      style={styles.submit}
                      underlayColor='#fff'>
                    <View style={{
                      alignItems:"center",
                      flexDirection:'row',
                    }}>
                      <View style={{flex:5, alignItems:'flex-end'}}>
                        <Text style={styles.submitText }>Add to Cart</Text>
                      </View>
                      <View style={{flex:5, flexDirection:'row',alignItems:'flex-start'}}>
                        <Text style={styles.submitText}>|</Text> 
                        <Text style={styles.submitText}>$80.00</Text> 
                      </View>
                    </View>
                  </TouchableHighlight>
              </View>
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
  backgroundProduct:{
    flex:1,
    flexDirection:"row",
    justifyContent:'flex-start'
    
  },
  infoProductView:{
    flex:1,
    marginTop:30,
    justifyContent:'flex-start'
  },
  description:{
    fontSize:14,
    color:'#c0bec8'
  },
  body:{
    fontSize:14,
    color:'#3c3363'
  },
  submit: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#474b9b',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#fff',

  },
  submitText: {
    color: '#fff',
    alignItems:'flex-start',
    paddingHorizontal:5,
    justifyContent:'flex-start'
  }
});

export default MedicinesItem;